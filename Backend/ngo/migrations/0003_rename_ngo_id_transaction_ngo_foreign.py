# Generated by Django 4.1.6 on 2023-02-11 03:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ngo', '0002_transaction_ngo_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='ngo_id',
            new_name='ngo_foreign',
        ),
    ]
