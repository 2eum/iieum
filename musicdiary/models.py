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

    def __str__(self):
        return self.title