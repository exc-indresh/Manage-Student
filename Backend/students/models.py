from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=20, unique=True)
    branch = models.CharField(max_length=50)
    age = models.IntegerField()
    cgpa = models.FloatField()
    skills = models.TextField()
    
    def __str__(self):
        return self.name
