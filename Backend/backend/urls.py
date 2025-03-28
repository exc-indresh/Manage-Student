from django.contrib import admin
from django.urls import path, include

def home(request):
    return HttpResponse("Hello, World!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('students.urls')),
]