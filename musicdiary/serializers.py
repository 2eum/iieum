from rest_framework import serializers
from .models import Musicdiary, Question

class MusicdiarySerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.nickname')
    class Meta: 
        model = Musicdiary
        fields = ('url', 'id','title','user','content','pub_date','question')

    def to_representation(self, instance):
        self.fields['question'] = QuestionRepresentationSerializer(read_only=True)
        return super(MusicdiarySerializer, self).to_representation(instance)

class QuestionSerializer(serializers.ModelSerializer):
    musicdiary = MusicdiarySerializer(many=True, read_only=True)
    class Meta: 
        model = Question
        fields = ('url', 'id','question_content','released_date', 'musicdiary')

class QuestionRepresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ("url", "id", "question_content")