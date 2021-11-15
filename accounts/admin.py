from django.contrib import admin

from .models import User

class UserAdmin(admin.ModelAdmin):
    fields = ['username', 'email', 'password']

admin.site.register(User, UserAdmin)