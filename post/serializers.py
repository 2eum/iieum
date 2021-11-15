from rest_framework import serializers
from .models import Post, Question

class PostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta: 
        model = Post
        fields = ('url', 'id','title','user','content','pub_date','track_title','track_artist','track_album_cover','track_audio','spotify_link','question','liked_user')

    def to_representation(self, instance):
        self.fields['question'] = QuestionRepresentationSerializer(read_only=True)
        return super(PostSerializer, self).to_representation(instance)

class QuestionSerializer(serializers.ModelSerializer):
    Post = PostSerializer(many=True, read_only=True)
    class Meta: 
        model = Question
        fields = ('url', 'id','question_content','released_date', 'explain', 'Post')

class QuestionRepresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ("url", "id", "question_content")