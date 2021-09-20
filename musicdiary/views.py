from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MusicdiarySerializer 
from .models import Musicdiary
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly

class MusicdiaryViewSet(viewsets.ModelViewSet): 
    authentication_classes = (SessionAuthentication, BasicAuthentication )
    permission_classes = (IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly )
    queryset = Musicdiary.objects.all() 
    serializer_class = MusicdiarySerializer

    # serializer.save() 재정의
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    