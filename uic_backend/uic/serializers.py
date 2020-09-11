from rest_framework import serializers
from . import models


class EventSerializer(serializers.ModelSerializer):
  class Meta:
        fields = ('id', 'title', 'content', 'created_at', 'updated_at',)
        model = models.Event
