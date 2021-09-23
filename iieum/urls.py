"""iieum URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import include, url
from django.urls import path
from rest_framework import routers
from musicdiary.views import MusicdiaryViewSet,SearchView,MyPageView
from account import views
from rest_framework.authtoken import views as authViews 
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('musicdiary', MusicdiaryViewSet)

musicdiary_detail = MusicdiaryViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    url('admin/', admin.site.urls),
    #path('', include('frontend.urls')),
    url('', include(router.urls)),
    url('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('api-token-auth/', authViews.obtain_auth_token),
    url('signup/', views.SignupView.as_view()),
    url('login/', views.LoginView.as_view()),
    url('musicdiary/<int:pk>/',musicdiary_detail), 
    url('spotify/', SearchView.as_view()), #음악검색
    url('mypage/', MyPageView.as_view()), # 마이페이지
]