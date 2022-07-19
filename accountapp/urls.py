from django.urls import path
from .views import login_view, register_parents, register_students, register_pre
from django.contrib.auth.views import LogoutView
from . import views # 같은 폴더 내의 views.py를 import

app_name = 'accounts'

urlpatterns = [
    path('login/', login_view, name="login"),
    path('register_parents/', register_parents, name="register_parents"),
    path('register_students/', register_students, name="register_students"),
    path('register_pre/', register_pre, name="register_pre"),
    path("logout/", LogoutView.as_view(), name="logout"),

]