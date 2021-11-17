from django.db import models
from django.contrib.auth.models import UserManager, AbstractUser

class User(AbstractUser):
    objects = UserManager()
    nickname = models.CharField(max_length=30)
    def __str__(self):
        return self.username