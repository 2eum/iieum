from django.db import models
from django.db.models.deletion import CASCADE
from account.models import User

class Question(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    question_content = models.CharField(max_length=150)
    released_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.question_content


class Musicdiary(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    title = models.CharField(max_length=70)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=CASCADE)
    content = models.TextField(max_length= 1000)
    pub_date = models.DateTimeField(auto_now_add=True)
    question = models.ForeignKey("Question", related_name="musicdiary", on_delete=models.DO_NOTHING, db_column="question")
    # 좋아요
    liked_user = models.ManyToManyField(User, related_name='likes',blank=True)
    like_count = models.PositiveIntegerField(default=0) #PositiveIntegerField는 0과 양수만 받는 필드이다
    def __str__(self):
        return self.title