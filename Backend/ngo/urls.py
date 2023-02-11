from django.urls import path, include

from rest_framework import routers
from .views import NgoViewset, WorkViewset

router = routers.DefaultRouter()

router.register('ngo', NgoViewset)
router.register('work', WorkViewset)

urlpatterns = [
    path('', include(router.urls))
]
