# Generated by Django 4.1.6 on 2023-02-11 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ngo', '0010_blog_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='uploads/'),
        ),
    ]