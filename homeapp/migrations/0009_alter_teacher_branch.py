# Generated by Django 3.2 on 2022-07-18 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0008_auto_20220718_1651'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='branch',
            field=models.CharField(choices=[('포엠학원 지곡캠퍼스', '지곡점'), ('포엠학원 북구캠퍼스', '북구점'), ('포엠학원 센텀캠퍼스', '센텀점')], max_length=20),
        ),
    ]