from django.db import models
from django.conf import settings


# Create your models here
class Type(models.Model):
    title = models.CharField(max_length=255)


class Philanthropist(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class PhilanthropistPreference(models.Model):
    # phil_id
    philanthropist = models.ForeignKey(
        Philanthropist, on_delete=models.CASCADE)
    # type_id
    type = models.ForeignKey(Type, on_delete=models.PROTECT)


class Work(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    year = models.DateField()


class Plan(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='')
    accomplish_by = models.DateField()


class Transaction(models.Model):
    philanthropist = models.ForeignKey(
        Philanthropist, on_delete=models.PROTECT)
    received = models.DecimalField(max_digits=8, decimal_places=2)
    spent = models.DecimalField(max_digits=8, decimal_places=2)


class Ngo(models.Model):
    type = models.OneToOneField(Type, on_delete=models.PROTECT)
    previous_work = models.ForeignKey(
        Work, on_delete=models.PROTECT, related_name='works')

    impact = models.TextField()
    end_goal = models.TextField()
    mission = models.TextField()
    history = models.TextField()

    transaction = models.ForeignKey(Transaction, on_delete=models.PROTECT)

    # plan
    plan = models.ForeignKey(Plan, on_delete=models.PROTECT)

    # funding needs
    funding_needed = models.DecimalField(max_digits=8, decimal_places=2)
