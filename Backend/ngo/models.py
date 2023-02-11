from django.db import models
from django.conf import settings


# Create your models here
class Type(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class Philanthropist(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class PhilanthropistPreference(models.Model):
    # phil_id
    philanthropist = models.ForeignKey(
        Philanthropist, on_delete=models.CASCADE, related_name='preferences')
    # type_id
    type = models.ForeignKey(
        Type, on_delete=models.PROTECT)


class Transaction(models.Model):
    philanthropist = models.ForeignKey(
        Philanthropist, on_delete=models.PROTECT)
    # todo ngo:
    ngo_foreign = models.ForeignKey(
        'Ngo', on_delete=models.PROTECT, related_name="+")
    received = models.DecimalField(max_digits=8, decimal_places=2)
    spent = models.DecimalField(max_digits=8, decimal_places=2)


class Ngo(models.Model):
    name = models.CharField(max_length=255)
    type = models.OneToOneField(Type, on_delete=models.PROTECT)

    impact = models.TextField()
    end_goal = models.TextField()
    mission = models.TextField()
    history = models.TextField()

    # funding needs
    funding_needed = models.DecimalField(max_digits=8, decimal_places=2)

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name


class Plan(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='')
    accomplish_by = models.DateField()

    ngo = models.ForeignKey(Ngo, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title


class Work(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    year = models.DateField()

    ngo = models.ForeignKey(Ngo, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title
