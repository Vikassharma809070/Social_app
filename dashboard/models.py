from django.db import models

class SocialPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    scheduled_time = models.DateTimeField()
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
