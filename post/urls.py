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
    #path('api/question/lastweek-popular', LastWeekPopularQuestion.as_view()), # 지난주 인기질문
    path('api/like/<int:post_id>/', LikeToggle.as_view()), # 좋아요 기능
    path('api/questionlist', QuestionList.as_view()),
    path('api/getonepost', GetOnePost.as_view()),
    path('api/postlist-user', PostList_user.as_view()),
    path('api/postlist-date', PostList_date.as_view()),
    path('api/postlist-user-date', PostList_user_date.as_view()),
    path('api/postlist-question', PostList_question.as_view()),
]
