from django.urls import path
from . import views

app_name = 'accounts'

'''
    주의사항,
    문자열 variable routing 사용시,
    

'''
urlpatterns = [
    # path('url 경로/', 실행될 view힘수, pattern이름)
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('<username>/', views.profile, name='profile'),
    path('<int:profile_owner_pk>/follow/', views.follow, name='follow'),
]