from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import Http404

class ConfirmEmailView(APIView):
    permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        # A React Router Route will handle the failure scenario
        return Response({"detail":"login success"})

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
                return Response({"detail":"login fail"})
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
            raise Http404("Nickname already exist")

class UsernameCheck(APIView):
    @csrf_exempt
    def post(self, request):
        username = request.data['username']
        user = User.objects.filter(username=username).first()
        if user is None:
            return Response({"detail":"Available username"})
        else:
            raise Http404("Username already exist")

class EmailCheck(APIView):
    @csrf_exempt
    def post(self, request):
        email = request.data['email']
        user = User.objects.filter(email=email).first()
        if user is None:
            return Response({"detail":"Available email"})
        else:
            raise Http404("Email already exist")