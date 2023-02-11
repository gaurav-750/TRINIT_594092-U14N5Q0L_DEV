from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import Ngo, PhilanthropistPreference, Plan, Type, Work, Philanthropist


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


class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = ['id', 'title']


class PhilanthropistSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    # preferences = TypeSerializer(many=True, read_only=True)

    class Meta:
        model = Philanthropist
        fields = ['id', 'user', 'preferences']


class CreatePhilanthropistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Philanthropist
        fields = ['id']

    def save(self, **kwargs):
        Philanthropist.objects.create(user_id=self.context['user_id'])

