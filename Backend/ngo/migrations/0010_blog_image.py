# Generated by Django 4.1.6 on 2023-02-11 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ngo', '0009_blog'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/'),
        ),
    ]