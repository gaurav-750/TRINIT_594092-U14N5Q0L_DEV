from rest_framework.viewsets import ModelViewSet, GenericViewSet

from .models import Ngo, Philanthropist, Transaction, Plan
from .serializers import NgoSerializer


# Create your views here.
class NgoViewset(ModelViewSet):
    queryset = Ngo.objects.all()

    serializer_class = NgoSerializer
