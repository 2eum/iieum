from .models import User
from rest_framework import viewsets
from rest_framework import permissions, generics
from .serializers import UserSerializer, LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny

# 문법 나중에 바꾸기 !!! UserViewSet 까먹지마

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]

class SignupView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        user = User.objects.create_user(nickname=request.data['nickname'], password=request.data['password'])
        user.save()

        token = Token.objects.create(user=user)
        token.save()
        return Response({"Id": user.id, "Token": token.key, "User": user.nickname})


class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = Token.objects.get(user=user)
        return Response({
            "Id": user.id,
            "User": user.nickname,
            "Token": token.key
        })