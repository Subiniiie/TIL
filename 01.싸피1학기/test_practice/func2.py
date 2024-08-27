# list_of_book = [
#     '장화홍련전',
#     '가락국 신화',
#     '온달 설화',
#     '금오신화',
#     '이생규장전',
#     '만복자서포기',
#     '수성지',
#     '백호집',
#     '원생몽유록',
#     '홍길동전',
#     '장생전',
#     '도문대작',
#     '옥루몽',
#     '옥련몽',
# ]

# rental_list = [
#     '장생전',
#     '원생몽유록',
#     '이생규장전',
#     '장화홍련전',
#     '수성지',
#     '백호집',
#     '난중일기',
#     '홍길동전',
#     '만복자서포기',
# ]


# for rental in rental_list :
#     check = False
#     not_book = []
#     for book in list_of_book :
#         if rental == book :
#             check = True
#     if check == False :
#         not_book.append(rental)
#         print(f'{rental} 은/는 보유하고 있지 않습니다.')

# if not_book == False :
#     print('모든 도서가 대여 가능한 상태입니다.')



# list_of_book = [
#     '장화홍련전',
#     '가락국 신화',
#     '온달 설화',
#     '금오신화',
#     '이생규장전',
#     '만복자서포기',
#     '수성지',
#     '백호집',
#     '원생몽유록',
#     '홍길동전',
#     '장생전',
#     '도문대작',
#     '옥루몽',
#     '옥련몽',
# ]


# rental_book = [
#     '장생전',
#     '위대한 개츠비',
#     '원생몽유록',
#     '이생규장전',
#     '데미안',
#     '장화홍련전',
#     '수성지',
#     '백호집',
#     '난중일기',
#     '홍길동전',
#     '만복자서포기',
# ]

# missing_book = [rent for rent in rental_book if rent not in list_of_book]

        
# if missing_book == False :
#     print('모든 도서가 대여 가능한 상태입니다.')
# else :
#     for book in missing_book :
#         print(f'{book} 을/를 보충하여야 합니다.')
            
            

# import requests
# from pprint import pprint

# # 무작위 유저 정보 요청 경로
# API_URL = 'https://jsonplaceholder.typicode.com/users/1'

# response = requests.get(API_URL)
# response = response.json()
# pprint(response)
# print(type(response))
# print(response['name'])
# print(response['username'])
# print(response['company']['name'])

# import request

# NAME = 'develper'
# MAIN_URL = 'http://127.0.0.1:8000'

# def create_url(name, main_url, page_num=1):
#     new_url = f'{main_url}/{name}?page={page_num}'
#     return new_url

# result = create_url(NAME, MAIN_URL)
# print(result)



# import requests
# from pprint import pprint

# dummy_data = []
# for i in range(1, 11) :
#     API_URL = f'https://jsonplaceholder.typicode.com/users/{i}'
#     response = requests.get(API_URL)
#     response = response.json()
#     dummy_data.append(response['name'])
# pprint(dummy_data)


food_list = [
    {
        '종류': '한식',
        '이름': '잡채'
    },
    {
        '종류': '채소',
        '이름': '토마토'
    },
    {
        '종류': '중식',
        '이름': '자장면'
    },
]

for food in food_list :
    if food['이름'] == '토마토' :
        food['종류'] = '과일'
    elif food['이름'] == '자장면' :
        print('자장면엔 고춧가루지')
    print(f'{food["이름"]} 은/는 {food["종류"]} (이)다.')
    
print(food_list)

i = 0
while i < 3 :
    if i == 1 :
        food_list[i]['종류'] = '과일'
    if i == 2 :
        print('자장면엔 고춧가루지')
    print(f'{food_list[i]["이름"]} 은/는 {food_list[i]["종류"]} (이)다.')

    i += 1