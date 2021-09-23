from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MusicdiarySerializer,MyPageSerializer
from .models import Musicdiary
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy
from django.conf import settings

class MusicdiaryViewSet(viewsets.ModelViewSet): 
    authentication_classes = (SessionAuthentication, BasicAuthentication )
    permission_classes = (IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly )
    queryset = Musicdiary.objects.all() 
    serializer_class = MusicdiarySerializer

    # serializer.save() 재정의
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SearchView(APIView):
    @csrf_exempt
    def post(self, request):
        search_word = request.data['search']
        CLIENT_ID = getattr(settings, 'CLIENT_ID', None)
        CLIENT_SECRET = getattr(settings, 'CLIENT_SECRET', None)
        client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
        sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
        results = sp.search(search_word)
        """
        검색 결과 parsing index
        for track in results.tracks.items:
            노래제목: track.name
            가수이름: track.artists.0.name
            앨범아트: track.album.images.0.url
            미리듣기: track.preview_url
        """
        return Response({"Search word": search_word, "Results": results})

class MyPageViewSet(viewsets.ModelViewSet):
    queryset = Musicdiary.objects.all()
    serializer_class = MyPageSerializer
    def get_queryset(self):
        qs = super().get_queryset()
        if self.request.user.is_authenticated:
            qs = qs.filter(user=self.request.user)
        else:
            qs = qs.none()      # empty result
        return qs