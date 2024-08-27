'''
새로운 리뷰가 작성되면 닉네임, 나이, 레벨을 출력하고 
고객의 정보를 하나의 딕셔너리로 취합한 뒤 출력하고
쓴 리뷰의 개수를 나타내시오
'''


#global 함수 사용
review_num = 0

def review() :
    global review_num
    print('현재 가입된 유저 수:', review_num)
    review_num += 1

    
    def user(name, age, level) :
        info = {'name': name,
                'age': age,
                'level': level
                }
        print(f'{name}님 리뷰 작성 감사합니다.')
        print(info)
        print('현재 가입된 유저 수:', review_num)
        
    user('홍길동', 28, 1)
        
review()



#인자를 반환
review_num = 0

def review(num) :
    print('현재 가입된 유저 수:', num)
    num += 1
    
    def user(name, age, level) :
        info = {'name': name,
                'age': age,
                'level': level
                }
        print(f'{name}님 리뷰 작성 감사합니다')
        print(info)
        print('현재 가입된 유저 수:', num)
        
    user('홍길동', 28, 1)
    
review_num = review(review_num)