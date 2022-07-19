from django.contrib import admin

# Register your models here.
from homeapp.models import Teacher, Post


class TeacherAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'subject','branch','is_activated']
    list_display_links = ['name']

admin.site.register(Teacher, TeacherAdmin)


class PostAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'created_at','url']
    list_display_links = ['name']

admin.site.register(Post, PostAdmin)