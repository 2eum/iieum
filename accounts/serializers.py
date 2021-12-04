from django.db import transaction
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import *

class CustomRegisterSerializer(RegisterSerializer):
    nickname = serializers.CharField(max_length=30)
    # Define transaction.atomic to rollback the save operation in case of error
    @transaction.atomic
    def save(self, request):
        user = super().save(request)
        user.nickname = self.data.get('nickname')
        user.save()
        return user

class UserRepresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "nickname", "email")