from rest_framework import serializers
from .models import Post, Question

class PostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.nickname')
    class Meta: 
        model = Post
        fields = ('url', 'id','title','user','content','pub_date','question','liked_user')

    def to_representation(self, instance):
        self.fields['question'] = QuestionRepresentationSerializer(read_only=True)
        return super(PostSerializer, self).to_representation(instance)

class QuestionSerializer(serializers.ModelSerializer):
    Post = PostSerializer(many=True, read_only=True)
    class Meta: 
        model = Question
        fields = ('url', 'id','question_content','released_date', 'Post')

class QuestionRepresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ("url", "id", "question_content")