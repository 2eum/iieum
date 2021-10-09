from django.views.decorators import csrf
from rest_framework import serializers, viewsets
from .serializers import MusicdiarySerializer, QuestionSerializer
from .models import Musicdiary, Question
from rest_framework.authentication import TokenAuthentication 
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


# 전체 글 보여주기
class MusicdiaryViewSet(viewsets.ModelViewSet): 
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    queryset = Musicdiary.objects.all().order_by('-pub_date')
    serializer_class = MusicdiarySerializer
    
    # serializer.save() 재정의
    def perform_create(self, serializer):
        if self.request.data['auto_pk'] != 0: # '질문에 답하기' 눌러서 들어옴
            auto_pk = self.request.data['auto_pk'] # 자동선택된 질문의 pk
            user_pk = self.request.data['question'] # new 창에서 다시 선택한 질문의 pk
            if auto_pk != user_pk: # 자동선택으로 들어왔는데 바꿈
                serializer.save(user=self.request.user)
            else: # 그대로 자동선택된 질문 유지
                auto_q = Question.objects.filter(pk=auto_pk).first()
                serializer.save(user=self.request.user, question=auto_q)

        else: # 그냥 새글쓰기로 들어옴, 질문 자동선택하지 않았음
            serializer.save(user=self.request.user)
    """
    <정리>
    auto_pk != 0, auto_pk == user_pk     -> '질문에 답하기'로 들어와서 따로 질문 선택 다시 안 한 경우
    auto_pk != 0, auto_pk != user_pk     -> '질문에 답하기'로 들어와서 따로 질문을 선택한 경우
    auto_pk == 0                         -> '새글쓰기'로 들어온 경우
    """



# 음악 검색
class SearchView(APIView):
    @csrf_exempt
    def post(self, request):
        search_word = request.data['search']
        CLIENT_ID = getattr(settings, 'CLIENT_ID', None)
        CLIENT_SECRET = getattr(settings, 'CLIENT_SECRET', None)
        client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
        sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
        results = sp.search(search_word)
        return Response({"Search word": search_word, "Results": results})



# 마이페이지
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



# 최근 5일 간의 질문 불러오기 (오늘, 어제, 2,3,4일 전)
class PastQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        enddate = datetime.today().date();
        startdate = enddate - timedelta(4)

        pastday_question = Question.objects.filter(released_date__range=[startdate, enddate])

        if pastday_question:
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(pastday_question, many=True, context=serializer_context)
            return Response(serializer_class.data)


# 지난주 인기질문 (그 질문에 그 날 작성된 글의 개수)
class LastWeekPopularQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        startdate = datetime.today().date()-timedelta(7);
        enddate = datetime.today().date()- timedelta(1);

        lastweek_question = Question.objects.filter(released_date__range=[startdate, enddate])

        if lastweek_question:
            musicdiary_count = -1
            musicdiary_max = -1
            popular_pk = 0
            for last_q in lastweek_question:
                date_range1 = datetime.combine(last_q.released_date, datetime.min.time())
                date_range2 = datetime.combine(last_q.released_date+timedelta(1), datetime.min.time())
                musicdiary_count = Musicdiary.objects.filter(question=last_q.id).filter(pub_date__range=[date_range1, date_range2]).count()
                #print(last_q.question_content, last_q.released_date, musicdiary_count)
                if musicdiary_count > musicdiary_max:
                    musicdiary_max = musicdiary_count
                    popular_pk = last_q.id

            popular_question = Question.objects.filter(pk=popular_pk).first()
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(popular_question, many=False, context=serializer_context)
            return Response(serializer_class.data)