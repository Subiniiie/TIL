'''
전역변수(global variable) : 함수를 포함해 스크립트 전체에 접근할 수 있는 변수
'''

number_of_people = 0

def increase_user() :
    global number_of_people   #전역변수 number_of_people을 사용하겠다고 설정
    number_of_people += 1
    
increase_user()
print('현재 가입 된 유저 수 :', number_of_people)