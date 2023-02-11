from django.urls import path, include

from rest_framework import routers
from .views import NgoViewset

router = routers.DefaultRouter()

router.register('ngo', NgoViewset)

urlpatterns = [
    path('', include(router.urls))
]
