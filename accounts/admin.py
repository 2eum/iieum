from django.contrib import admin

from .models import User

class UserAdmin(admin.ModelAdmin):
    fields = ['username', 'email', 'password', 'nickname']

admin.site.register(User, UserAdmin)