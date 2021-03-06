# Generated by Django 3.2 on 2022-07-08 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0005_auto_20220708_1951'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='branch',
            field=models.CharField(choices=[('포엠학원 센텀캠퍼스', '센텀점'), ('포엠학원 북구캠퍼스', '북구점'), ('포엠학원 지곡캠퍼스', '지곡점')], default='지곡점', max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='presentation',
            name='place',
            field=models.CharField(choices=[('포엠학원 센텀캠퍼스', '센텀점'), ('포엠학원 북구캠퍼스', '북구점'), ('포엠학원 지곡캠퍼스', '지곡점')], max_length=100),
        ),
    ]
