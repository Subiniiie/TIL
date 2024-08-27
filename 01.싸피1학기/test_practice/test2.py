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
#방법1
# print(sorted(unsorted_list))
#방법2
# unsorted_list.sort()
# print(unsorted_list)

number_of_people = 0

def increase_user(num) :
    num += 1
    print(num)
    return f'현재 가입 된 유저 수 : {num}'

    
result = increase_user(number_of_people)
result2 = increase_user(number_of_people)
result3 = increase_user(number_of_people)
print(result3)


# def my_multi(number_1, number_2):
#     return number_1 * number_2
# # my_multi(2, 3) 결과 : 6
# # 함수를 수정하고 호출 결과를 result_1 변수에 할당하여 출력하시오.

# result_1 = my_multi(2, 3)
# print(result_1)


# def is_negative(number):
#     check = False
#     if number < 0 :
#         check = True
#     return check
# # is_negative(3) 결과 : False
# # 함수를 수정하고 호출 결과를 result_2 변수에 할당하여 출력하시오.
# result_2 = is_negative(3)
# print(result_2)

# def default_arg_func(default = '기본 값'):
#     return default


# result_3 = default_arg_func()
# result_4 = default_arg_func('다른 값')
# print(result_3)
# print(result_4)


# number_of_people = 0


# def increase_user(num):
#     print(f'현재 가입 된 유저 수: {num}')
#     num += 1
#     return num


# def create_user(name, age, address):
#     number = increase_user(number_of_people)
    
#     print(f'{name}님 환영합니다!')
#     user_info = {'name': name,
#                  'age': age,
#                  'address': address
#                  }
   
#     print(user_info)
#     print(f'현재 가입 된 유저 수: {number}')

#     return user_info



# create_user('홍길동', 20, '서울')



# pro_num = 1000
# global_data = {'subject': 'python', 'day': 3, 'title': '함수 활용하기'}

# def create_data(subject, day, num, title=None):
#     num += 1
    
#     data = {}
#     data = {'과목':subject,
#             '일차': day,
#             '제목': title,
#             '문제 번호': num
#             }
#     return num

# result_1 = create_data('python', 3, pro_num)
# result_2 = create_data('web', 3, pro_num, 'web 연습하기')
# result_3 = create_data(**global_data, num = pro_num)

# print(result_1)
# print(result_2)
# print(result_3)
