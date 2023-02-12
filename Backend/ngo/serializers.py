from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import Blog, Ngo, PhilanthropistPreference, Plan, Type, Work, Philanthropist


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ['id', 'title']


class NgoSerializer(serializers.ModelSerializer):
    type = serializers.StringRelatedField()

    class Meta:
        model = Ngo
        fields = ['id', 'name', 'impact', 'end_goal', 'mission',
                  'history', 'funding_needed', 'type', 'user', 'city']


class CreateNgoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ngo
        fields = ['id', 'name', 'impact', 'end_goal', 'mission',
                  'history', 'funding_needed', 'type', 'city']

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


class PhilanthropistPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhilanthropistPreference
        fields = ['id', 'philanthropist', 'type']


class AddPhilanthropistPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhilanthropistPreference
        fields = ['id', 'type']

    def save(self, **kwargs):
        user_id = self.context['user_id']
        phil = Philanthropist.objects.get(user_id=user_id)

        PhilanthropistPreference.objects.create(
            philanthropist_id=phil.id, **self.validated_data
        )


class BlogSerializer(serializers.ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Blog
        fields = ['id', 'author', 'title', 'description', 'image']


class CreateBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title', 'description', 'image']

    def save(self, **kwargs):
        Blog.objects.create(
            author_id=self.context['user_id'], **self.validated_data
        )
