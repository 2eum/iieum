from django.urls import path
from django.conf.urls import include, url
from .views import MusicdiaryViewSet, QuestionViewSet, SearchView, MyPageView, RandomQuestion, TodayQuestion, YesterdayQuestion, PastQuestion
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/musicdiary', MusicdiaryViewSet)
router.register('api/question', QuestionViewSet)

musicdiary_detail = MusicdiaryViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    url('', include(router.urls)),
    path('api/musicdiary/<int:pk>/',musicdiary_detail), 
    path('api/spotify/', SearchView.as_view()), #음악검색
    path('api/mypage/', MyPageView.as_view()), # 마이페이지
    path('api/random-question/', RandomQuestion.as_view()), # 질문 랜덤돌리기(오늘의 질문 선택)
    path('api/today-question/', TodayQuestion.as_view()), # 오늘의 질문
    path('api/yesterday-question/', YesterdayQuestion.as_view()), # 어제의 질문
    path('api/past-question/', PastQuestion.as_view()), # 2,3,4일 전 질문
]
