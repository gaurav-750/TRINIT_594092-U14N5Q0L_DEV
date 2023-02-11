from djoser.serializers import UserCreateSerializer as BaseUCS, \
    UserSerializer as BaseUS


class UserCreateSerializer(BaseUCS):
    class Meta(BaseUCS.Meta):
        fields = [
            'id',
            'username',
            'password',
            'email',
            'first_name',
            'last_name'
        ]


class UserSerializer(BaseUS):
    class Meta(BaseUS.Meta):
        fields = ['id', 'username', 'email',
                  'first_name', 'last_name']
