from rest_framework import serializers
from .models import Musicdiary


class MusicdiarySerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.nickname')

    class Meta: 
        model = Musicdiary
        fields = ('id','title','user','content','pub_date')


class MyPageSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.nickname')
    class Meta: 
        model = Musicdiary
        fields = ('id','title','user','content','pub_date')