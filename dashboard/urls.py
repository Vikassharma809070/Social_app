from django.urls import path
from .views import SocialPostList, SocialPostDetail

urlpatterns = [
    path('posts/', SocialPostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', SocialPostDetail.as_view(), name='post-detail'),
]
