from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from django_filters.rest_framework import DjangoFilterBackend

from .models import Ngo, Philanthropist, Transaction, Plan, Work
from .serializers import NgoSerializer, WorkSerializer, PlanSerializer, PhilanthropistSerializer


# Create your views here.
class NgoViewset(ModelViewSet):
    queryset = Ngo.objects.all()

    serializer_class = NgoSerializer


class WorkViewset(ListModelMixin, RetrieveModelMixin, GenericViewSet):

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['ngo']

    queryset = Work.objects.all()
    serializer_class = WorkSerializer


class PlanViewset(ListModelMixin, RetrieveModelMixin, GenericViewSet):

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['ngo']

    queryset = Plan.objects.all()
    serializer_class = PlanSerializer


class PhilanthropistViewset(ModelViewSet):
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'id']

    queryset = Philanthropist.objects.all()
    serializer_class = PhilanthropistSerializer
