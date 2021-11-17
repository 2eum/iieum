from django.urls import path
from django.conf.urls import include, url
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/post', PostViewSet)
router.register('api/question', QuestionViewSet)

urlpatterns = [
    url('', include(router.urls)),
    path('api/spotify/', SearchView.as_view()), #음악검색
    path('api/mypage/', MyPageView.as_view()), # 마이페이지
    path('api/question/random', RandomQuestion.as_view()), # 질문 랜덤돌리기(오늘의 질문 선택)
    path('api/question/past', PastQuestion.as_view()), # 0,1,2,3,4일 전 질문 불러오기
    path('api/like/<int:post_id>/', LikeToggle.as_view()), # 좋아요 기능
    url(r'^api/questionlist/(?P<start_date>.+)/(?P<end_date>.+)/(?P<limit>.+)$', QuestionList.as_view()),
    path('api/post/<int:pk>', GetOnePost.as_view()),
    path('api/postlist-user/<int:pk>/<int:limit>', PostList_user.as_view()),
    url(r'^api/postlist-date/(?P<start_date>.+)/(?P<end_date>.+)/(?P<limit>.+)$', PostList_date.as_view()),
    url(r'^api/postlist-user-date/(?P<pk>.+)/(?P<start_date>.+)/(?P<end_date>.+)/(?P<limit>.+)$', PostList_user_date.as_view()),
    path('api/postlist-question/<int:pk>/<int:limit>', PostList_question.as_view()),
    path('api/likeuserlist/<int:pk>', LikeUserList.as_view()),
    path('api/userinfo/<int:pk>', UserInfo.as_view()),
    path('api/likelist/<int:pk>', Likelist.as_view()),
    path('api/lastpost/<int:pk>', LastPost.as_view()),
    path('api/recentmusic/<int:limit>', RecentMusic.as_view()),
    url(r'^api/postlist-music/(?P<title>.+)/(?P<artist>.+)/(?P<limit>.+)$', Postlist_music.as_view())
]
