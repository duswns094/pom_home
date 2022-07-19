from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse



# Create your views here.
from django.views.generic import TemplateView, DetailView

from homeapp.models import Teacher, Post
from presentationapp.models import Presentation


class IndexView(TemplateView):
    template_name = 'homeapp/index.html'

    def get_context_data(self):
        context = super().get_context_data()
        teachers = Teacher.objects.filter(is_activated=1)
        presentations = Presentation.objects.all().order_by('-created_at')[:3]
        posts = Post.objects.all().order_by('-created_at')[:8]
        context = {'teacher_list': teachers,
                   'presentation_list': presentations,
                   'post_list':posts,
                   }
        return context

