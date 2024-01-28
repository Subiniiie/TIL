# words = 'Hello, World!'
# print(words)


# apple = '사과는 영어로 apple'
# banana = '바나나는 영어로 banana'
# kiwi = '키위는 영어로 kiwi'

# print(apple)
# print(banana)
# print(kiwi)

# string = '문자열'
# integer = 10
# floating_point = 3.14
# a_list = [1, 2, 3, 4]
# dictionary = {'name': '홍길동', 'age': 20}
# a_set = {1, 2, 3, 4, 5}
# a_range = range(11)
# a_tuple = (1, 2, 3)
# boolean = True 

# print(type(string))
# print(type(integer))
# print(type(floating_point))
# print(type(a_list))
# print(type(dictionary))
# print(type(a_set))
# print(type(a_range))
# print(type(a_tuple))
# print(type(boolean))

# korean = '한글'
# english = 'english'
# number = 3

# print(f'{korean}과 {english}')
# print(number * korean)

# s1 = '반짝 반짝'
# s2 = '에서도'
# s3 = '작은별'
# s4 = '아름답게 비치네'
# s5 = '동쪽 하늘'
# s6 = '서쪽 하늘'

# print(s1, s3, s4)
# print(s5+s2, s6+s2)
# print(s1, s3, s4) 

# password = "In the bustling city, where life is a constant race against time, uoy often find yourself wondering if there's a shortcut to success. The vibrant lights of the cityscape illuminate the night, casting shadows on the short-lived dreams of those who seek fortune. As you navigate through the crowded streets, you realize the deen for guidance, like a compass pointing python. You need direction in this chaotic journey called life."

# first_char = password[28:36]
# second_word = password[113:118]
# third_word = password[69:65:-1]
# fourth_word = password[326:320:-1]
# fifth_word = password[365:371]

# print(f'{first_char}{second_word}{third_word}{fourth_word}"{fifth_word}".')


# pi = 3.141592653589793
# meter = 15

# print(f'원주율 :  {pi}')
# print(f'반지름 :  {meter}')
# print('원의 둘레 : ', meter * 2 * pi)
# print('원의 넓이 : ', meter ** 2 * pi)

# print(3 * 2)
# print( 3 ** 2)
# print((3 ** 2) // (3 * 2), (3 ** 2) % (3 * 2))
# print((3 ** 2) + ((-3) ** 2))

# book = '1'
# total = 10
# guide = '현재 보유 중인 총 책의 수는 다음과 같습니다.'
# print(guide)
# print(total)

# changes = '그 중, 대여중인 책을 제외한 책의 수는 다음과 같습니다.'
# rental = 3.0
# print(changes)
# print(total - int(rental))

# authors = [
#     '작자 미상',
#     '이항복',
#     '임제',
#     '임제',
#     '조성기',
#     '조성기',
#     '조성기',
#     '임제',
#     '허균',
#     '허균',
#     '허균',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '임제',
#     '박지원',
#     '이항복',
#     '남영로',
#     '남영로',
#     '남영로',
#     '이항복',
#     '임제',
#     '임제',
# ]

# result = []

# for name in authors :
#     if name not in result :
#         result.append(name)
        
# print(result)


# print('다음은 이형기 시인의 "낙화"의 한 구절이다.\n- 1연\n\t가야할 때 언제인가를\n\t분명히 알고 가는 이의\n\t뒷모습은 얼마나 아름다운가.\n\n나는 이 시를 보며 \'나는 내가 가야할 때가 언제일까?\' 를 생각해 보았다.')

# zero_list = [0]
# print(zero_list)
# many_zero_list = [0]*250000
# print(len(many_zero_list))
# numbers = [num for num in range(1, 11)]
# print(numbers)
# print(numbers[3:])

author_1 = '권필'
author_2 = '허균'
book_1 = '주생전'
book_2 = '홍길동전'

# print(f'{book_1}의 작가는 {author_1}이고, \n{author_2}은 {book_2}를 집필하였다.')


# data = {'과목': 'Python',
#         '구분': '실습',
#         '단계': 2,
#         '문제번호': 3251,
#         '이름': None,
#         '일차': 22
#         }
# print(data)
# data['단계'] = str(data['단계'])+'단계'
# title = '딕셔너리 활용하기'
# data['이름'] = title
# data['일차'] -= 20
# print(data)

# books = ['광문자전', '유연전', '심청전', '홍길동전', '수성지']
# authors = ['작자 미상', '허균', '박지원', '이항복', '임제']

# print(f'{authors[1]} : {books[3]}')
# print(f'{authors[3]} : {books[1]}')
# print(f'{authors[0]} : {books[2]}')
# print(f'{authors[2]} : {books[0]}')
# print(f'{authors[4]} : {books[4]}')


# data = [{'has_more': False,
#   'next_cursor': None,
#   'object': 'list',
#   'page_or_database': {},
#   'request_id': 'a5163fff-758f-45ea-b6fb',
#   'results': [{'archived': False,
#                'cover': None,
#                'created_by': {'object': 'user'},
#                'created_time': '2023-06-15T04:29:00.000Z',
#                'icon': None,
#                'last_edited_by': {'object': 'user'},
#                'last_edited_time': '2023-12-12T09:19:00.000Z',
#                'object': 'page',
#                'parent': {'type': 'database_id'},
#                'properties': {'setNum': {'id': '%7DK%40%5C',
#                                          'number': 1,
#                                          'type': 'number'},
#                               '과목': {'id': 'YuIE',
#                                      'multi_select': [{'color': 'default',
#                                                        'name': 'Python'}],
#                                      'type': 'multi_select'},
#                               '구분': {'id': '%40%3EmR',
#                                      'select': {'color': 'purple',
#                                                 'name': '실습'},
#                                      'type': 'select'},
#                               '단계': {'id': 'T%7B%7BP',
#                                      'select': {'color': 'default',
#                                                 'name': '3'},
#                                      'type': 'select'},
#                               '문제번호': {'id': 'uEBt',
#                                        'number': 1431,
#                                        'type': 'number'},
#                               '제목': {'id': 'title',
#                                      'title': [{'annotations': {'bold': False,
#                                                                 'code': False,
#                                                                 'color': 'default',
#                                                                 'italic': False,
#                                                                 'strikethrough': False,
#                                                                 'underline': False},
#                                                 'href': None,
#                                                 'plain_text': '복잡한 자료구조',
#                                                 'text': {'content': '복잡한 자료구조',
#                                                          'link': None},
#                                                 'type': 'text'}],
#                                      'type': 'title'},
#                               '일차': {'id': 'nWnH',
#                                      'number': '2',
#                                      'type': 'number'},
#                               '커리큘럼': {'id': 'T%3AR_',
#                                        'multi_select': [{'color': 'default',
#                                                          'name': 'fundamentals-of-python'}],
#                                        'type': 'multi_select'}},
#                'public_url': None
#             }],
#   'type': 'page_or_database'}]

# first_dict = {}

# first_dict = {'제목': data[0]['results'][0]['properties']['제목']['title'][0]['plain_text'],
#               '일차': int(data[0]['results'][0]['properties']['일차']['number']),
#               '단계': data[0]['results'][0]['properties']['단계']['select']['name']+'단계',
#               '과목': data[0]['results'][0]['properties']['과목']['multi_select'][0]['name']
#               }

# print(first_dict)

# information = dict()
# authors = ['김시습', '허균', '남영로', '작자 미상', '임제', '박지원']
# books = [
#     ['장화홍련전', '가락국 신화', '온달 설화'],
#     ['금오신화', '이생규장전', '만복자서포기'],
#     ['수성지', '백호집', '원생몽유록'],
#     ['홍길동전', '장생전', '도문대작'],
#     ['옥루몽', '옥련몽'],
# ]

# #information = {"saf": 'asf'}
# information = {authors[0]:  books[1],
#                authors[1]: books[3],
#                authors[2]: books[4],
#                authors[3]: books[0],
#                authors[4]: books[2]
#                }


# for key in information :
#     print(f'{key} : {information[key]}')

import copy

catalog = [
    ['시간의 틈', '반짝임의 어둠', '망각의 경계'],
    ['연기의 수수께끼', '장면의 고백', '드라마의 그림자'],
    ['황금의 칼날', '비열한 간신', '무명의 영웅'],
    ['성공의 열쇠', '내면의 변화', '목표의 달성'],
]

backup_catalog = copy.deepcopy(catalog)
catalog[3][0] = '성공을 향한 한 걸음'
catalog[3][1] = '내 삶의 변화'
catalog[3][2] = '목표 달성의 비밀'
# 식별 연산자로 catalog와 backup_catalog를 비교한 결과를 출력하시오.


print('backup_catalog : ')
print(backup_catalog)

print('catalog : ')
print(catalog)


import copy
original_list = [1, 2, 3, 4]
copy_list = copy.deepcopy(original_list)