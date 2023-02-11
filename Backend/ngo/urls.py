from django.urls import path, include

from rest_framework import routers
from .views import NgoViewset, WorkViewset, PlanViewset, PhilanthropistViewset, TypeViewset

router = routers.DefaultRouter()

router.register('ngo', NgoViewset)
router.register('work', WorkViewset)
router.register('plan', PlanViewset)
router.register('philanthropist', PhilanthropistViewset,
                basename='philanthropist')
router.register('type', TypeViewset)

urlpatterns = [
    path('', include(router.urls))
]
