from django.db import models
from django.conf import settings
from django.db.models.deletion import CASCADE
from account.models import User
#from django.contrib.auth.models import User

class Musicdiary(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    title = models.CharField(max_length=70)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=CASCADE)
    content = models.TextField(max_length= 1000)
    pub_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title