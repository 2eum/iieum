from django.urls import path
from django.conf.urls import include, url
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/musicdiary', MusicdiaryViewSet)
router.register('api/question', QuestionViewSet)

urlpatterns = [
    url('', include(router.urls)),
    path('api/spotify/', SearchView.as_view()), #음악검색
    path('api/mypage/', MyPageView.as_view()), # 마이페이지
    path('api/question/random', RandomQuestion.as_view()), # 질문 랜덤돌리기(오늘의 질문 선택)
    path('api/question/past', PastQuestion.as_view()), # 0,1,2,3,4일 전 질문 불러오기
    path('api/question/lastweek-popular', LastWeekPopularQuestion.as_view()), # 지난주 인기질문
]
