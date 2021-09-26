from django.urls import path
from django.conf.urls import include, url
from .views import MusicdiaryViewSet, QuestionViewSet, SearchView, MyPageView
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
]
