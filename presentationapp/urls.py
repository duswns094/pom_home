from django.urls import path

from presentationapp import views

app_name = 'presentations'

urlpatterns = [
    path('presentation/<int:pk>', views.PresentationDetailView.as_view(), name='presentationdetail'),
    path('presentation_apply_create/',views.PresentationApplyView.as_view(), name='presentation_apply_create'),
    path('presentation_apply_check',views.presentationcheckview, name='presentation_apply_check'),
]