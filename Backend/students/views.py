from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Student
from .serializers import StudentSerializer

class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['branch', 'cgpa']
    search_fields = ['skills']

class StudentRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer