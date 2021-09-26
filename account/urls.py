from django.urls import path
from .views import SignupView, LoginView

urlpatterns = [
    path('api/signup/', SignupView.as_view()),
    path('api/login/', LoginView.as_view()),
]
