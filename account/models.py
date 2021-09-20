from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False, **kwargs):
#     if created:
#         Token.objects.create(user=instance)

class UserManager(BaseUserManager):
    # 일반 user 생성
    def create_user(self, nickname, password=None):
        if not nickname:
            raise ValueError('must have user nickname')
        user = self.model(
            nickname = nickname,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    def create_superuser(self, nickname, password=None):
        user = self.create_user(
            password = password,
            nickname = nickname,
        )
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    nickname = models.CharField(default='', max_length=100, null=False, blank=False, unique=True)
    
    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    def get_full_name(self):
        pass
    def get_short_name(self):
        pass
    @property
    def is_superuser(self):
        return self.is_admin
    @property
    def is_staff(self):
        return self.is_admin
    def has_perm(self, perm, obj=None):
        return self.is_admin
    def has_module_perms(self, app_label):
        return self.is_admin
    @is_staff.setter
    def is_staff(self, value):
        self._is_staff = value

    # 헬퍼 클래스 사용
    objects = UserManager()

    # 사용자의 username field는 nickname으로 설정
    USERNAME_FIELD = 'nickname'
    # 필수로 작성해야하는 field
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.nickname