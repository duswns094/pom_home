from django.urls import path
from homeapp import views


app_name = 'home'

urlpatterns = [
    path('', views.IndexView.as_view(), name='home'),
]