# print(range(6))

# print(list(range(6)))
# print('hello world')


# dict_1 = {'t':'태연', 'i': '아이유', 'j': '조유리'}
# print(dict_1)

# dict_2 = {4: '태연', 8: '아이유', 9: '조유리'}
# print(dict_2)

# dict_3 = {(4, 5, 4): '태연', (4, 2, '가'): '아이유', ('가', '나'): '조유리'}
# print(dict_3)

# dict_4 = {range(4, 9):'태연', range(6, 4): '조유리'}
# print(dict_4)

# print(4 > 8)
# print(3 != 6)
# print(4 % 2)
# print(bool(4 % 2))




# my_set = {4, 5, 3}
# my_set = {2, 1, 7}
# my_set = set([9, 6])
# print(type(my_set))

# a = 'hello'
# print(a[3])


# dict = {4:3, (4, 3, 2): '나', '밥':'비빔밥'}
# print(str(dict))

# print(3 and 0)
# print(0 and 3)

# print(3 or 0)
# print(0 or 3)

# print('Gildong' + 'Hong')
# print([1, 2] * 3)

# def sum_result(num1, num2) :
#     sum_print = num1 + num2
#     print(sum_print)
#     return sum_print
    
# result = sum_result(4, 9)
# print(result)

# def make_sum(param1, param2) :
#     return param1 + param2

# print(make_sum(4, 3))


# def make_sum(param1, param2) :
#     print(param1 + param2)
    
# make_sum(4, 7)


# def greet(name, age) :
#     print(f'안녕하세요 {name}님 {age}살이시군요')
    
# # greet(name = 'alice', 35)
# greet('jane', 34, name='alice')

# def print_info(**kwargs) :
#     print(kwargs)
    
    
# print_info(name = 'jane', age = 24)

# def all_func(pos1, pos2, default_arg='defalt', *args, **kwargs) :
#     print(pos1, pos2, default_arg, args, kwargs)
    
# all_func('난 pos1', '난 pos2')

# num = 0

# def increment() :
#     global num
#     num += 1
    
# print(num)
# increment()
# print(num)

# def factorial(n) :
#     if n == 1 :
#         return 1
#     return n * factorial(n-1)

# result = factorial(5)
# print(result)

# numbers = [1, 2, 3]
# result = map(str, numbers)

# print(result)
# print(list(result))

# numbers = input().split()
# print(numbers)

# result = map(int, numbers)
# print(result)
# print(list(result))

# result = [x for x in '가나다']
# print(result)

# result = lambda x, y, z : (x + y) / z
# print(result(3, 6, 9))

# numbers = [1, 2, 3, 4, 5]

# def func(x) :
#     return x ** 2

# result = list(map(func, numbers))
# print(result)

# numbers = [1, 2, 3, 4, 5]

# result = list(map(lambda x : x **2, numbers))
# print(result)

# packed_values = 1, 2, 3, 4, 5
# print(packed_values)
# print(1, 2, 3, 4, 5)

# numbers = [1, 2, 3, 4, 5, 6]
# a, *b, c, d= numbers
# print(a)
# print(b)
# print(c)
# print(d)
# import module

# print(module.add(4, 6))

# numbers = [4, 6, 10, -8, 5]

# for i in range(len(numbers)) :
#     numbers[i] = numbers[i] * 2
    
# print(numbers)

# a = 0

# while a < 3 :
#     print(a)
#     a += 1
# print('끝')

# number = int(input('양의 정수를 입력하세요:'))

# while number <= 0 :
#     if number < 0 :
#         print('음수를 입력했습니다')
#     else :
#         print('0은 양의 정수가 아닙니다.')
#     number = int(input('양의 정수를 입력해주세요:'))
         
# print('잘했습니다.')


# numbers = [1, 3, 5, 6, 7, 9, 10, 11]
# found_even = False

# for num in numbers :
#     if num % 2 == 0 :
#         print('첫 번째 짝수를 찾았습니다:', num)
#         found_even = True
#         break

# if not found_even :
#     print('짝수를 찾지못햇습니다')

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# for num in numbers :
#     if num % 2 :
#         continue
#     print(num)
    
# print('짝수를 찾았습니다')


# for number in range(0, 5) :
#     if number != 3 :
#         print(number)
        

# numbers = [1, 2, 3, 4, 5]

# squared_numbers = [num ** 2 for num in numbers]
# print(squared_numbers)

# result = []

# for i in range(10) :
#     if i % 2 :
#         result.append(i)
        
# print(result)

# result = [ i for i in range(10) if i % 2]
# print(result)


fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits, start=101) :
    print(f'인덱스 {index}: {fruit}')