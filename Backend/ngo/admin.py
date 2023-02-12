from django.contrib import admin
from .models import *

# Register your models here.
# Register your models here.
admin.site.register(Type)
# admin.site.unregister(Philanthropist)
# admin.site.register(Philanthropist, Ngo)
admin.site.register(Philanthropist)
admin.site.register(PhilanthropistPreference)
admin.site.register(Transaction)
admin.site.register(Ngo)
admin.site.register(Plan)
admin.site.register(Work)
admin.site.register(Blog)
