from django.db import models
from django.contrib.auth.models import UserManager, AbstractUser

class User(AbstractUser):
    objects = UserManager()
    def __str__(self):
        return self.username