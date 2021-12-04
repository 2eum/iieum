from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import Http404
from rest_framework.exceptions import APIException
from django.utils.encoding import force_text
from rest_framework import status
from django.http import HttpResponseRedirect
from .serializers import *

class CustomValidation(APIException):
    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = 'A server error occurred.'

    def __init__(self, detail, field, status_code):
        if status_code is not None:self.status_code = status_code
        if detail is not None:
            self.detail = {field: force_text(detail)}
        else: self.detail = {'detail': force_text(self.default_detail)}

class ConfirmEmailView(APIView):
    permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        # A React Router Route will handle the failure scenario
        #return Response({"detail":"login success"})
        return HttpResponseRedirect(redirect_to="/#/email-confirmed")

    def get_object(self, queryset=None):
        key = self.kwargs['key']
        email_confirmation = EmailConfirmationHMAC.from_key(key)
        if not email_confirmation:
            if queryset is None:
                queryset = self.get_queryset()
            try:
                email_confirmation = queryset.get(key=key.lower())
            except EmailConfirmation.DoesNotExist:
                # A React Router Route will handle the failure scenario
                #return Response({"detail":"login fail"})
                return HttpResponseRedirect(redirect_to="/")
        return email_confirmation

    def get_queryset(self):
        qs = EmailConfirmation.objects.all_valid()
        qs = qs.select_related("email_address__user")
        return qs

class NicknameCheck(APIView):
    @csrf_exempt
    def post(self, request):
        nickname = request.data['nickname']
        user = User.objects.filter(nickname=nickname).first()
        if user is None:
            return Response({"detail":"Available nickname"})
        else:
            raise CustomValidation('Duplicate Nickname','nickname', status_code=status.HTTP_409_CONFLICT)

class UsernameCheck(APIView):
    @csrf_exempt
    def post(self, request):
        username = request.data['username']
        user = User.objects.filter(username=username).first()
        if user is None:
            return Response({"detail":"Available username"})
        else:
            raise CustomValidation('Duplicate Username','username', status_code=status.HTTP_409_CONFLICT)

class EmailCheck(APIView):
    @csrf_exempt
    def post(self, request):
        email = request.data['email']
        user = User.objects.filter(email=email).first()
        if user is None:
            return Response({"detail":"Available email"})
        else:
            raise CustomValidation('Duplicate Email','email', status_code=status.HTTP_409_CONFLICT)

class UserinfoChangeView(APIView):
    @csrf_exempt
    def post(self, request):
        new_username = request.data['new_username']
        new_nickname = request.data['new_nickname']
        user = User.objects.filter(id=self.request.user.id).first()
        if user is not None:
            user.username = new_username
            user.nickname = new_nickname
            user.save()
            serializer_context = {'request': request,}
            serializer_class = UserRepresentationSerializer(user, many=False, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("User does not exist")

class Userinfo(APIView):
    @csrf_exempt
    def post(self, request):
        pk = request.data['pk']
        user = User.objects.filter(id=pk).first()
        if user is not None:
            serializer_context = {'request': request,}
            serializer_class = UserRepresentationSerializer(user, many=False, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("User does not exist")