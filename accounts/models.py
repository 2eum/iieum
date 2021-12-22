import re
from django.db import models
from django.contrib.auth.models import UserManager, AbstractUser
from django.core.validators import  MinLengthValidator, RegexValidator

class User(AbstractUser):
    objects = UserManager()
    username = models.CharField(validators=[MinLengthValidator(4)], max_length=30, unique=True)
    nickname = models.CharField(validators=[MinLengthValidator(2)], max_length=30)
    def __str__(self):
        return self.username