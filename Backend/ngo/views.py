from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from django_filters.rest_framework import DjangoFilterBackend

from .models import Ngo, Philanthropist, Transaction, Plan, Type, Work
from .serializers import NgoSerializer, CreateNgoSerializer, TypeSerializer, WorkSerializer, PlanSerializer, UpdateNgoSerializer, PhilanthropistSerializer, CreatePhilanthropistSerializer
from .permissions import IsOwnerOrReadOnly


# Create your views here.
class NgoViewset(ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]
    http_method_names = ['get', 'post', 'patch', 'delete']

    queryset = Ngo.objects.all()

    # serializer_class = NgoSerializer
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateNgoSerializer
        elif self.request.method == 'PATCH':
            return UpdateNgoSerializer
        else:
            return NgoSerializer

    def get_serializer_context(self):
        return {
            'user_id': self.request.user.id
        }


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

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreatePhilanthropistSerializer
        else:
            return PhilanthropistSerializer

    def get_serializer_context(self):
        return {
            'user_id': self.request.user.id
        }


class TypeViewset(ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer
