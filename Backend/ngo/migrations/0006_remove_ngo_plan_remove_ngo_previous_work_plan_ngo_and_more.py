# Generated by Django 4.1.6 on 2023-02-11 04:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ngo', '0005_remove_ngo_transaction'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ngo',
            name='plan',
        ),
        migrations.RemoveField(
            model_name='ngo',
            name='previous_work',
        ),
        migrations.AddField(
            model_name='plan',
            name='ngo',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ngo.ngo'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='work',
            name='ngo',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='ngo.ngo'),
            preserve_default=False,
        ),
    ]
