from django.urls import path, include

from rest_framework import routers
from .views import NgoViewset, WorkViewset, PlanViewset, PhilanthropistViewset

router = routers.DefaultRouter()

router.register('ngo', NgoViewset)
router.register('work', WorkViewset)
router.register('plan', PlanViewset)
router.register('philanthropist', PhilanthropistViewset,
                basename='philanthropist')

urlpatterns = [
    path('', include(router.urls))
]
