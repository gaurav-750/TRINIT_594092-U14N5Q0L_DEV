from rest_framework import serializers

from .models import Ngo, Plan, Work


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['id', 'title', 'description', 'accomplish_by']


class NgoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ngo
        fields = ['id', 'name', 'impact', 'end_goal', 'mission',
                  'history', 'funding_needed', 'type']


class SimpleNgoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ngo
        fields = ['id', 'name', 'type']


class WorkSerializer(serializers.ModelSerializer):
    ngo = SimpleNgoSerializer()

    class Meta:
        model = Work
        fields = ['id', 'title', 'description', 'ngo', 'year']
