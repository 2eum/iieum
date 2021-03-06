from django.db import models
from django.db.models.deletion import CASCADE
from accounts.models import User

class Question(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    question_content = models.CharField(max_length=150)
    released_date = models.DateField(null=True, blank=True)
    explain = models.TextField(max_length=200)

    def __str__(self):
        return self.question_content


class Post(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    title = models.CharField(max_length=70)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=CASCADE)
    content = models.TextField(max_length= 1000)
    pub_date = models.DateTimeField(auto_now_add=True)
    track_title = models.CharField(max_length=100)
    track_artist = models.CharField(max_length=100)
    track_album_cover = models.CharField(max_length=200)
    track_audio = models.CharField(max_length=200)
    spotify_link = models.CharField(max_length=200)
    question = models.ForeignKey("Question", related_name="Post", on_delete=models.DO_NOTHING, db_column="question")
    liked_user = models.ManyToManyField(User, related_name='like', blank=True)
    def __str__(self):
        return self.title