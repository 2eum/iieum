from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MusicdiarySerializer, QuestionSerializer
from .models import Musicdiary, Question
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication 
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy
from django.conf import settings
from rest_framework import status
from django.db.models import Max
import random
from datetime import datetime, timedelta

# 전체 글 보여주기(Viewset)
class MusicdiaryViewSet(viewsets.ModelViewSet): 
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    queryset = Musicdiary.objects.all().order_by('-pub_date')
    serializer_class = MusicdiarySerializer

    # serializer.save() 재정의
    def perform_create(self, serializer): #쓰기
        serializer.save(user=self.request.user)#, track_title=self.request.data['track_title'], track_artist=self.request.data['track_artist'], track_album_cover=self.request.data['track_album_cover'], track_audio=self.request.data['track_audio'])

    #def perform_update(self, serializer): #수정하기
        #serializer.save(user=self.request.user, track_title=self.request.data['track_title'], track_artist=self.request.data['track_artist'], track_album_cover=self.request.data['track_album_cover'], track_audio=self.request.data['track_audio'])

# 음악 검색(View)
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

# 마이페이지(View)
class MyPageView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = (IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly )
    #내가 쓴 글 보여주기
    def get(self, request):
        if request.user.is_authenticated:
            serializer_context = {
                'request': request,
            }
            queryset = Musicdiary.objects.filter(user=self.request.user).order_by('-pub_date')
            serializer_class = MusicdiarySerializer(queryset, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            return Response({"detail":"Please login"})
    #내페이지에서 글 쓰기
    def post(self, request):
        if request.user.is_authenticated:
            serializer_context = {
                'request': request,
            }
            serializer = MusicdiarySerializer(data=request.data, context=serializer_context)
            if serializer.is_valid(): #유효성 검사
                serializer.save(user=self.request.user)#, track_title=self.request.data['track_title'], track_artist=self.request.data['track_artist'], track_album_cover=self.request.data['track_album_cover'], track_audio=self.request.data['track_audio']) # 저장
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"detail":"Please login"})

class QuestionViewSet(viewsets.ModelViewSet): 
    authentication_classes = [TokenAuthentication]
    permission_classes = (IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly )
    queryset = Question.objects.all() 
    serializer_class = QuestionSerializer


# 질문 랜덤돌리기(하루에 한번 호출해서 오늘의 질문 선택)
class RandomQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        max_id = Question.objects.all().aggregate(max_id=Max("id"))['max_id']
        while True:
            pk = random.randint(1, max_id)
            random_question = Question.objects.filter(pk=pk).first()
            if random_question:
                serializer_context = {'request': request,}
                random_question.released_date = datetime.today().date() # 오늘 날짜
                random_question.save()
                serializer_class = QuestionSerializer(random_question, many=False, context=serializer_context)
                return Response(serializer_class.data)


# 오늘의 질문 보여주기 (HOME 1)
"""class TodayQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        today_question = Question.objects.filter(released_date=datetime.today().date()).first()
        if today_question:
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(today_question, many=False, context=serializer_context)
            return Response(serializer_class.data)


# 어제의 질문 보여주기 (HOME 2)
class YesterdayQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        yesterday = datetime.today().date() - timedelta(1)
        yesterday_question = Question.objects.filter(released_date=yesterday).first()
        if yesterday_question:
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(yesterday_question, many=False, context=serializer_context)
            return Response(serializer_class.data)"""


# 2,3,4일 전 질문 보여주기 (HOME 4)
class PastQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        startdate = datetime.today().date() - timedelta(4)
        enddate = startdate + timedelta(days=4)

        pastday_question = Question.objects.filter(released_date__range=[startdate, enddate])

        if pastday_question:
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(pastday_question, many=True, context=serializer_context)
            return Response(serializer_class.data)