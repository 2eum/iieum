from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, mixins
from rest_framework import generics # generics class-based view 사용할 계획
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.decorators import permission_classes, authentication_classes

# JWT 사용을 위해 필요
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer

from .serializers import *
from .models import *

# 누구나 접근 가능
@permission_classes([AllowAny]) 
class Registration(generics.GenericAPIView):
    serializer_class = CustomRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid(raise_exception=True):
            return Response({"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT)

        serializer.is_valid(raise_exception=True)
        user = serializer.save(request) # request 필요 -> 오류 발생
        return Response(
            {
            # get_serializer_context: serializer에 포함되어야 할 어떠한 정보의 context를 딕셔너리 형태로 리턴
            # 디폴트 정보 context는 request, view, format
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data
            },
                status=status.HTTP_201_CREATED,
        )

@permission_classes([AllowAny])
class Login(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if not serializer.is_valid(raise_exception=True):
            return Response({"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT)

        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        if user['username'] == "None":
            return Response({"message": "fail"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data, 
                "token": user['token']
            }
        )














"""from .models import User
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
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]

class SignupView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        user = User.objects.create_user(nickname=request.data['nickname'], password=request.data['password'], email=request.data['email'], name=request.data['name'])
        user.save()

        token = Token.objects.create(user=user)
        token.save()
        return Response({"Id": user.id, "Token": token.key, "User ID": user.nickname, "Email": user.email, "name": user.name})


class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = Token.objects.get(user=user)
        return Response({
            "Token": token.key,
            "Id": user.id,
            "User": user.nickname,
            "Email": user.email,
            "Name": user.name,
        })"""