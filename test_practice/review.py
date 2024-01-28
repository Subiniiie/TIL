# d = {'one': 1, 'two': 2, 'three': 3}
# print(d.setdefault('four', 'unknown'))  #d에 추가
# print(d.get('five', 'tt'))
# print(d)

#sort()  원본값을 직접 수정
#sorted()  원본값을 직접 수정x/정렬 값을 반환


# a = [4, 3, 7, 1, 5]

# a.sort()
# print(a)

# b = [5, 2, 4, 1, 7]

# new_b = sorted(b)
# print(b)
# print(new_b)

# def add_numbers(num1, num2):
#     print(f'{num1}과 {num2}를 인자로 넘긴 경우,')
#     return num1 + num2

# result = add_numbers(3, 5)
# print(result)

# 1. 절댓값을 반환하는 함수 abs를 사용하여 아래 변수에 담긴 값의 절댓값을 출력하시오.
# negative = -3
# print(abs(negative))

# 2. 아래 변수에 담긴 값의 boolean 값을 출력하시오.
# empty_list = []
# print(bool(empty_list))

# 3. 주어진 리스트가 가진 모든 값을 더한 결과를 출력하시오.
# my_list = [1, 2, 3, 4, 5]
# print(sum(my_list))

# 4. 주어진 정렬을 오름차순으로 정렬한 결과를 출력하시오.
# unsorted_list = ['하', '교', '캅', '의', '지', '가']
# unsorted_list.sort()
# print(unsorted_list)

# sorted_list = sorted(unsorted_list)
# print(sorted_list)

number_of_people = 0


def increase_user():
    global number_of_people
    
    print(f'현재 가입 된 유저 수 : {number_of_people}')
    number_of_people += 1
    
    return number_of_people

def create_user(name, age, address):
    increase_user()
    
    print(f'{name}님 환영합니다.') 
    
    user_info =  {'name': name,
                  'age': age,
                  'address': address
                  }
     
    return user_info


result = create_user('홍길동', 30, '서울')
print(result)
print(f'현재 가입 된 유저 수 : {number_of_people}')