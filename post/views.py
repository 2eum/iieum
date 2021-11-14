from rest_framework import viewsets
from .serializers import PostSerializer, QuestionSerializer
from .models import Post, Question
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy
from django.conf import settings
from django.db.models import Max
import random
from datetime import datetime, timedelta
from accounts.models import *
from django.http import Http404
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend


# 전체 글
class PostViewSet(viewsets.ModelViewSet): 
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    queryset = Post.objects.all().order_by('-pub_date')
    serializer_class = PostSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend] 
    search_fields = ['title','content','question__question_content','track_title','track_artist']

    # serializer.save() 재정의
    def perform_create(self, serializer):
        serializer.save(user=self.request.user,
                        track_title=self.request.data['track_title'],
						track_artist=self.request.data['track_artist'],
						track_album_cover=self.request.data['track_album_cover'],
						track_audio=self.request.data['track_audio'],
                        spotify_link=self.request.data['spotify_link'])
    def perform_update(self, serializer): #수정하기
        serializer.save(user=self.request.user,
						track_title=self.request.data['track_title'],
						track_artist=self.request.data['track_artist'],
						track_album_cover=self.request.data['track_album_cover'],
						track_audio=self.request.data['track_audio'],
                        spotify_link=self.request.data['spotify_link'])

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

# 마이페이지 => 추후 삭제
class MyPageView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = (IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly )
    #내가 쓴 글 보여주기
    def get(self, request):
        if request.user.is_authenticated:
            serializer_context = {
                'request': request,
            }
            queryset = Post.objects.filter(user=self.request.user).order_by('-pub_date')
            serializer_class = PostSerializer(queryset, many=True, context=serializer_context)
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
        # 오늘 날짜로 등록됐던 질문들은 다시 null로 바꿈(에러 처리)
        free_question = Question.objects.filter(released_date=datetime.today().date())
        for fq in free_question:
            fq.released_date = None
            fq.save()
        while True:
            pk = random.randint(1, max_id)
            # released_date가 null인 것들 중에 찾음
            random_question = Question.objects.filter(released_date=None).filter(pk=pk).first()
            if random_question:
                serializer_context = {'request': request,}
                random_question.released_date = datetime.today().date() # 오늘 날짜
                random_question.save()
                serializer_class = QuestionSerializer(random_question, many=False, context=serializer_context)
                return Response(serializer_class.data)

# 최근 5일 간의 질문 불러오기(최신순) => 추후 삭제
class PastQuestion(APIView):
    @csrf_exempt
    def get(self, request):
        enddate = datetime.today().date();
        startdate = enddate - timedelta(4)
        pastday_question = Question.objects.filter(released_date__range=[startdate, enddate]).order_by('-released_date')
        if pastday_question:
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(pastday_question, many=True, context=serializer_context)
            return Response(serializer_class.data)

# 좋아요 기능 
class LikeToggle(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = (IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly )
    def post(self, request, post_id):
        like_list = Post.objects.filter(id=post_id).first()  
        if self.request.user in like_list.liked_user.all():
            like_list.liked_user.remove(self.request.user)
            like_list.save()
        else:
            like_list.liked_user.add(self.request.user)
            like_list.save()

        serializer_context = {'request': request,}
        serializer_class = PostSerializer(like_list, many=False, context=serializer_context)
        return Response(serializer_class.data)


"""========================================= Endpoint 추가 및 수정 ========================================="""


# 특정 날짜/개수 범위 내의 질문리스트 (req: 날짜, 개수제한 / res: 질문 리스트)
class QuestionList(APIView):
    @csrf_exempt
    def get(self, request, s_year, s_month, s_day, e_year, e_month, e_day, limit):
        startdate_string = str(s_year)+"-"+str(s_month)+"-"+str(s_day)
        startdate = datetime.strptime(startdate_string, "%Y-%m-%d")
        enddate_string = str(e_year)+"-"+str(e_month)+"-"+str(e_day)
        enddate = datetime.strptime(enddate_string, "%Y-%m-%d")
        if limit == 0: # 한계없음
            questionlist = Question.objects.filter(released_date__range=[startdate, enddate]).order_by('-released_date')
        else:
            questionlist = Question.objects.filter(released_date__range=[startdate, enddate]).order_by('-released_date')[:limit]
        if questionlist:
            serializer_context = {'request': request,}
            serializer_class = QuestionSerializer(questionlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Question does not exist")


# 타겟 글 객체 하나 (req: 글 id, res: 글 객체)
class GetOnePost(APIView):
    @csrf_exempt
    def get(self, request, pk):
        post = Post.objects.filter(pk=pk).first()
        if post:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(post, many=False, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")


# 타겟 유저의 글목록 (req: 유저 id(숫자값), 개수 제한 res: 해당 유저의 글 목록)
class PostList_user(APIView):
    @csrf_exempt
    def get(self, request, pk, limit):
        if limit == 0: # 한계없음
            postlist = Post.objects.filter(user=pk).order_by('-pub_date')
        else:
            postlist = Post.objects.filter(user=pk).order_by('-pub_date')[:limit]
        if postlist:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(postlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")


# 특정 날짜 범위 내의 글목록, 유저 구분X (req: 날짜, 개수 제한 / res: 해당 기간 동안의 글 목록)
class PostList_date(APIView):
    @csrf_exempt
    def get(self, request, s_year, s_month, s_day, e_year, e_month, e_day, limit):
        startdate_string = str(s_year)+"-"+str(s_month)+"-"+str(s_day)
        startdate = datetime.strptime(startdate_string, "%Y-%m-%d")
        enddate_string = str(e_year)+"-"+str(e_month)+"-"+str(e_day)
        enddate = datetime.strptime(enddate_string, "%Y-%m-%d")
        if limit == 0: # 한계없음
            postlist = Post.objects.filter(pub_date__range=[startdate, enddate]).order_by('-pub_date')
        else:
            postlist = Post.objects.filter(pub_date__range=[startdate, enddate]).order_by('-pub_date')[:limit]
        if postlist:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(postlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")


# 타겟 유저의 특정 날짜 범위 내의 글 목록 (req: 유저 아이디, 날짜 범위, 개수 제한 / res: 해당 기간 동안 유저의 글 목록)
class PostList_user_date(APIView):
    @csrf_exempt
    def get(self, request, pk, s_year, s_month, s_day, e_year, e_month, e_day, limit):
        startdate_string = str(s_year)+"-"+str(s_month)+"-"+str(s_day)
        startdate = datetime.strptime(startdate_string, "%Y-%m-%d")
        enddate_string = str(e_year)+"-"+str(e_month)+"-"+str(e_day)
        enddate = datetime.strptime(enddate_string, "%Y-%m-%d")
        if limit == 0: # 한계없음
            postlist = Post.objects.filter(user=pk).filter(pub_date__range=[startdate, enddate]).order_by('-pub_date')
        else:
            postlist = Post.objects.filter(user=pk).filter(pub_date__range=[startdate, enddate]).order_by('-pub_date')[:limit]
        if postlist:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(postlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")


# 질문에 달린 글 목록 (req: 질문 id, 개수 제한 / res: 그 질문에 달린 글 목록)
class PostList_question(APIView):
    @csrf_exempt
    def get(self, request, pk, limit):
        if limit == 0: # 한계없음
            postlist = Post.objects.filter(question=pk).order_by('-pub_date')
        else:
            postlist = Post.objects.filter(question=pk).order_by('-pub_date')[:limit]
        if postlist:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(postlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")

# 좋아요한 사람들 목록 (req: 글 아이디, res: 좋아요한 사람들 목록)
class LikeUserList(APIView):
    @csrf_exempt
    def get(self, request, pk):
        post = Post.objects.filter(pk=pk).first()
        if post:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(post, many=False, context=serializer_context)
            if serializer_class.data['liked_user']:
                return Response(serializer_class.data['liked_user'])
            else:
                raise Http404("User does not exist")
        else:
            raise Http404("Post does not exist")

# 유저가 쓴 글의 개수와 좋아요한 글의 개수(req: 유저 아이디, res: 글/좋아요 개수)
class UserInfo(APIView):
    @csrf_exempt
    def get(self, request, pk):
        postCount = Post.objects.filter(user=pk).count()
        likeCount = User.objects.prefetch_related('like').get(pk=pk).like.all().count()
        return Response({"post-count":postCount, "like-count":likeCount})

# 유저가 좋아요 표시한 글 목록(req: 유저 아이디, res: 좋아요 누른 글 목록)
class Likelist(APIView):
    @csrf_exempt
    def get(self, request, pk):
        likelist = User.objects.prefetch_related('like').get(pk=pk).like.all()
        if likelist:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(likelist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")

# 유저의 각 월별 마지막 글(req: 유저 아이디, res: 월별 마지막글)
class LastPost(APIView):
    @csrf_exempt
    def get(self, request, pk):
        postlist = Post.objects.filter(user=pk).order_by('-pub_date')
        lastpostlist = []
        lastpostlist.append(postlist[0])
        m = postlist[0].pub_date.month # m은 가장 최근에 찾은 월말 글의 month
        if postlist:
            serializer_context = {'request': request,}
            for post in postlist:
                if post.pub_date.month != m:
                    lastpostlist.append(post)
                    m = post.pub_date.month
                if m < 1:
                    m = 12
                
            serializer_class = PostSerializer(lastpostlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Post does not exist")

# 최근에 선택된 음악 (req: 개수, res: 음악정보만 추출한 리스트(중복제외))
class RecentMusic(APIView):
    @csrf_exempt
    def get(self, request, limit):
        postlist = Post.objects.all().order_by('-pub_date')
        targetlist = []
        musiclist = []

        if limit == 0: # 다 불러오기
            limit = len(postlist)

        for post in postlist:
            target = [post.track_title, post.track_artist]
            if target not in targetlist:
                targetlist.append(target)
                music = [post.track_title, post.track_artist, post.track_album_cover, post.track_audio, post.spotify_link]
                musiclist.append(music)
                limit -= 1
                if limit <= 0:
                    break
        
        if musiclist:
            return Response({"music list": musiclist})
        else:
            raise Http404("Music does not exist")

# 해당 음악이 포함된 글 목록 (req: 음악 제목, 아티스트, 개수제한 / res: 글 목록)
class Postlist_music(APIView):
    @csrf_exempt
    def get(self, request, title, artist, limit):
        if int(limit) == 0:
            postlist = Post.objects.filter(track_title=title).filter(track_artist=artist).order_by('-pub_date')
        else:
            postlist = Post.objects.filter(track_title=title).filter(track_artist=artist).order_by('-pub_date')[:int(limit)]

        if postlist:
            serializer_context = {'request': request,}
            serializer_class = PostSerializer(postlist, many=True, context=serializer_context)
            return Response(serializer_class.data)
        else:
            raise Http404("Music does not exist")