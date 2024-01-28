# import requests
# from pprint import pprint

# dummy_data = []
# for i in range(1, 11) :
#     temp_dict = {}
#     API_URL = f'https://jsonplaceholder.typicode.com/users/{i}'
#     response = requests.get(API_URL)
#     response = response.json()
#     temp_dict = {'company': response['company']['name'],
#                  'lat': response['address']['geo']['lat'],
#                  'lng': response['address']['geo']['lng'],
#                  'name': response['name']
#                  }
#     if float(temp_dict['lat']) < 80 and float(temp_dict['lng']) > -80 :
#         dummy_data.append(temp_dict)
    
# pprint(dummy_data)


matrix = [
        ['0, 1', '0, 2', '0, 3'], 
        ['1, 0', '1, 1', '1, 2', '1, 3'], 
        ['2, 0', '2, 1', '2, 2', '2, 3', '2, 4'], 
        ['3, 0', '3, 1'], 
        ['4, 0', '4, 1', '4, 2'], 
        ['5, 0']
    ]

matrix_len = 0

for i in range(len(matrix)) :
    matrix_len += 1
print(matrix_len)


for number in matrix :
    temporary_len = 0
    for i in range(len(number)) :
        temporary_len += 1
    if temporary_len <= 4 :
        print(f'{number}리스트는 {temporary_len}개 만큼 요소를 가지고 있습니다.')
        
        
        
        
for x in range(len(matrix)) :
    for y in range(len(matrix[x])) :
        print(f'matrix의 {x},{y}번째 요소의 값은 {matrix[x][y]}입니다.')