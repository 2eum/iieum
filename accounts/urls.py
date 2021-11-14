from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('api/signup/', views.Registration.as_view()),
    path('api/login/', views.Login.as_view()),
]







"""from django.urls import path
from .views import SignupView, LoginView

urlpatterns = [
    path('api/signup/', SignupView.as_view()),
    path('api/login/', LoginView.as_view()),
]
"""