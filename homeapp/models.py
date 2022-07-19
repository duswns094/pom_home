from django.db import models
from django.urls import reverse

subject_choices = (
    ('kor','국어'),
    ('math','수학'),
    ('eng','영어'),
    ('sci','과학'),
    ('ess','논술')
)

branch_choices = {
    ('포엠학원 지곡캠퍼스', '지곡점'),
    ('포엠학원 센텀캠퍼스', '센텀점'),
    ('포엠학원 북구캠퍼스', '북구점')
}

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=20, null=False)
    image = models.ImageField(upload_to='teacher/', null=True, default='teacher/no_image_man.png')
    poster = models.ImageField(upload_to='poster/', null=True, default='poster/no_image_man.png')
    branch = models.CharField(max_length=20, choices=branch_choices, null=False)
    subject = models.CharField(max_length=20, choices=subject_choices, null=False)
    description = models.TextField(null=True,blank=True)
    is_activated = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'

class Post(models.Model):
    name = models.CharField(max_length=100, null=False)
    image = models.ImageField(upload_to='post/', null=True, default='post/no_image.png')
    url = models.URLField(null=False)
    created_at = models.DateTimeField(auto_now_add=True,null=False, editable=True)

    def __str__(self):
        return f'{self.name}'