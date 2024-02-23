from django.shortcuts import render
from rest_framework import generics
from .models import SocialPost
from .serializers import SocialPostSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class SocialPostList(generics.ListCreateAPIView):
    queryset = SocialPost.objects.all()
    serializer_class = SocialPostSerializer

class SocialPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SocialPost.objects.all()
    serializer_class = SocialPostSerializer

    def perform_update(self, serializer):
        instance = serializer.save()
       # write  Logic  Something Here..


class SocialPostCreate(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SocialPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
