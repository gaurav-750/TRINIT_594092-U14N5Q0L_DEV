from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import Ngo, Plan, Work, Philanthropist


class NgoSerializer(serializers.ModelSerializer):
    type = serializers.StringRelatedField()

    class Meta:
        model = Ngo
        fields = ['id', 'name', 'impact', 'end_goal', 'mission',
                  'history', 'funding_needed', 'type', 'user']


class CreateNgoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ngo
        fields = ['id', 'name', 'impact', 'end_goal', 'mission',
                  'history', 'funding_needed', 'type']

    def save(self, **kwargs):
        Ngo.objects.create(**self.validated_data,
                           user_id=self.context['user_id'])


class UpdateNgoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ngo
        fields = ['name', 'funding_needed']


class SimpleNgoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ngo
        fields = ['id', 'name', 'type']


class WorkSerializer(serializers.ModelSerializer):
    ngo = SimpleNgoSerializer()

    class Meta:
        model = Work
        fields = ['id', 'title', 'description', 'ngo', 'year']


class PlanSerializer(serializers.ModelSerializer):
    ngo = SimpleNgoSerializer()

    class Meta:
        model = Plan
        fields = ['id', 'title', 'description', 'ngo', 'accomplish_by']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'first_name', 'last_name', 'email']


class PhilanthropistSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Philanthropist
        # fields = ['user']
        fields = ['id', 'user']