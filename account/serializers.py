from .models import User
from rest_framework import serializers
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            nickname = validated_data['nickname'],
            password = validated_data['password']
        )
        return user
    class Meta:
        model = User
        fields = ['id', 'nickname', 'password']

class LoginSerializer(serializers.Serializer):
    nickname = serializers.CharField()
    password = serializers.CharField()
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

    
