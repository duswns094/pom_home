from django.core.validators import RegexValidator
from django.db import models


# Create your models here.
branch_choices = {
    ('포엠학원 지곡캠퍼스', '지곡점'),
    ('포엠학원 센텀캠퍼스', '센텀점'),
    ('포엠학원 북구캠퍼스', '북구점')
}
class Presentation(models.Model):
    name = models.CharField(max_length=100, null=False)
    thum = models.ImageField(upload_to='presentation_thum/', null=True, default='presentation/no_image.png')
    title_img = models.ImageField(upload_to='presentation_title/', null=True, default='presentation/no_image.png')
    poster = models.ImageField(upload_to='presentation_poster/', null=True, default='presentation/no_image.png')
    time = models.CharField(max_length=100, null=False)
    place = models.CharField(max_length=100, choices=branch_choices, null=False)
    is_opened = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=False, editable=True)

    def __str__(self):
        return f'{self.name}'

class PresentationApply(models.Model):
    presentation = models.ForeignKey(Presentation, on_delete=models.CASCADE, null=False, related_name='presentation')
    applicant = models.CharField(max_length=10, null=False, blank=False)
    phone_num = models.CharField(max_length=13, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.presentation}'