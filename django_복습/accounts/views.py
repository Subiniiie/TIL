from django.shortcuts import render, redirect
# 근데, 내 view함수 login이랑 이름 겹침... -> as 별칭 만들기
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.forms import AuthenticationForm
# from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
from .models import User


# Create your views here.
def signup(request):
    # GET 요청, POSTdycjd whrjs qnsrl
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save() # 사용자가 보낸 정보로 user 생성
            print('저장되었음')
            # 함수로 한번에 하나의 요청에 대한 응답
            return redirect( 'accounts:login')
    else :
        # 사용자가 회원가입을 위한
        # 데이터를 입력한 form 렌더링
        # django가 기존에 제공하는 UserCreationForm은 auth.User를 기준으로 만들어졌다
        # 그래서 Meta class에 있는 model 정보가 auth.User에서 accounts.User로 바꿔야함

        form = CustomUserCreationForm()
    context = {
        'form': form,
    }
    return render(request, 'accounts/signup.html', context)


def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            # DB에 저장하는 것 아님 -> 애초에 ModelForm 아님
            # 로그인이라는 행위를 하고 싶다 -> 이미 장고가 만들어둠
            # 로그인을 하기 위해 form에 user에 대한 정보를 받았음
            # auth_login 함수에 넘겨줘야할 user 객체는? 당연히 form 안에 있음
            auth_login(request, form.get_user())
            return redirect('accounts:profile', form.get_user().username)
    else :
        # 로그인을 위한 정보 입력할 수 있는 form을 렌더링
        '''
            회원 가입은.. User Model과 관계된 작업
            auth.User -> accounts.User로 대체 되었으므로,
            django가 제공해주는 ModelForm도 model
        '''
        form = AuthenticationForm()
    context = {
        'form': form,
    }
    return render(request, 'accounts/login.html', context)


def profile(request, username):
    profile_owner = User.objects.get(username=username)
    context = {
        'profile_owner': profile_owner,
    }
    return render(request, 'accounts/profile.html', context)


def follow(request, profile_owner_pk):
    profile_owner = User.objects.get(pk=profile_owner_pk)
    if request.user in profile_owner.followers.all():
        profile_owner.followers.remove(request.user)
    else :
        profile_owner.followers.add(request.user)
    return redirect('accounts:profile', profile_owner.username)


def logout(request):
    auth_logout(request)
    return redirect('accounts:logout')