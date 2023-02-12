from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, CreateModelMixin
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.filters import SearchFilter, OrderingFilter

from django_filters.rest_framework import DjangoFilterBackend

from .models import Ngo, Philanthropist, PhilanthropistPreference, Transaction, Plan, Type, Work, Blog
from .serializers import AddPhilanthropistPreferenceSerializer, BlogSerializer, CreateBlogSerializer, NgoSerializer, CreateNgoSerializer, TypeSerializer, WorkSerializer, PlanSerializer, UpdateNgoSerializer, PhilanthropistSerializer, CreatePhilanthropistSerializer, PhilanthropistPreferenceSerializer
from .permissions import IsOwnerOrReadOnly
from .pagination import CustomPagination

# Create your views here.


class NgoViewset(ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly]
    http_method_names = ['get', 'post', 'patch', 'delete']

    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['name', 'city']
    filterset_fields = ['type']

    pagination_class = CustomPagination

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
    serializer_class = PhilanthropistSerializer

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

    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['id']
    search_fields = ['title']

    queryset = Type.objects.all()
    serializer_class = TypeSerializer


class PhilantrophistPreferenceViewset(ListModelMixin,
                                      CreateModelMixin,
                                      RetrieveModelMixin,
                                      GenericViewSet
                                      ):

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['philanthropist_id']

    queryset = PhilanthropistPreference.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AddPhilanthropistPreferenceSerializer
        else:
            return PhilanthropistPreferenceSerializer

    def get_serializer_context(self):
        return {
            'user_id': self.request.user.id
        }


class BlogViewset(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]

    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'author__first_name', 'author__last_name']

    queryset = Blog.objects.all()
    # serializer_class = BlogSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateBlogSerializer
        else:
            return BlogSerializer

    def get_serializer_context(self):
        return {
            'user_id': self.request.user.id
        }
