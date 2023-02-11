from django.urls import path, include

from rest_framework import routers
from .views import BlogViewset, NgoViewset, WorkViewset, PlanViewset, PhilanthropistViewset, TypeViewset, PhilantrophistPreferenceViewset

router = routers.DefaultRouter()

router.register('ngo', NgoViewset)
router.register('work', WorkViewset)
router.register('plan', PlanViewset)
router.register('philanthropist', PhilanthropistViewset,
                basename='philanthropist')
router.register('type', TypeViewset)
router.register('preference', PhilantrophistPreferenceViewset)
router.register('blog', BlogViewset)

urlpatterns = [
    path('', include(router.urls))
]
