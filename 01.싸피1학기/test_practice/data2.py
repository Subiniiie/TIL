# def remove_duplicates_to_set(my_list):
#     my_set = set(my_list)
    
#     return my_set

# result = remove_duplicates_to_set([1, 2, 2, 3, 4, 4, 5])
# print(result)


# 아래 함수를 수정하시오.
# def add_item_to_dict(dictionary, new_key, new_value):
#     new_dict = dictionary.copy()
#     new_dict[new_key] = new_value

#     return new_dict


# my_dict = {'name': 'Alice', 'age': 25}
# result = add_item_to_dict(my_dict, 'country', 'USA')
# print(result)


# def union_sets(set1, set2):
#     return set1.union(set2)


# result = union_sets({1, 2, 3}, {3, 4, 5})
# print(result)


# my_set = {'가', '나', (0, 0)}
# my_dict = {
#         '가': 1, 
#         (0, 0): '튜플도 키값으로 사용가능'
#     }

# 아래에 코드를 작성하시오.
# for char in my_set :
#     print(my_dict.get(char))
    
# var = (1, 2, 3, 'A')
# my_dict[var] = '변수로도 키 설정 가능'
# print(my_dict)

# def get_value_from_dict(input_dict, my_name):
#     return input_dict[my_name]


# my_dict = {'name': 'Alice', 'age': 25}
# result = get_value_from_dict(my_dict, 'name')
# print(result)

# data = {
#     '이름': '키위',
#     '종류': '새',
#     '원산지': '호주' 
# }

# plus_data = {
#     '종류': '과일',
#     '가격': 30000
# }
# 1. data가 가진 모든 키와 벨류 목록을 출력한다.
# print(data.items())

# 2. data가 가진 벨류 목록들만 모아서 출력한다.
# print(data.values())

# 3. data에서 'without' 키가 가진 value를 출력한다.
    # 해당하는 키가 data에 없다면, 'unknown' 문자열을 출력한다.
# print(data.get('without', 'unknown'))

# 4. plus_data가 가진 모든 키와 벨류를 data에 추가한다.
# data.update(plus_data)
# 5. 변경된 data를 출력한다.
# print(data)


# def intersection_sets(num1, num2):
#     return num1.intersection(num2)
    


# result = intersection_sets({1, 2, 3}, {3, 4, 5})
# print(result)

# data = [
#     {
#         'name': 'galxy flip',
#         'company': 'samsung',
#         'is_collapsible': True,
#     },
#     {
#         'name': 'ipad',
#         'is_collapsible': False
#     },
#     {
#         'name': 'galxy fold',
#         'company': 'samsung',
#         'is_collapsible': True
#     },
#     {
#         'name': 'galxy note',
#         'company': 'samsung',
#         'is_collapsible': False
#     },
#     {
#         'name': 'optimus',
#         'is_collapsible': False
#     },
# ]

# key_list = ['name', 'company', 'is_collapsible']

# # 아래에 코드를 작성하시오.
# for dict in data :
#     for key in key_list :
#         if key in dict :
#             print(f'{key}은/는 {dict[key]}입니다.')
#         else :
#             print(f'{key}은/는 {dict.setdefault("unknown")}입니다.')
#     print('\t')
    
    
    
# def get_keys_from_dict(dict):
#     return list(dict.keys())


# my_dict = {'name': 'Alice', 'age': 25}
# result = get_keys_from_dict(my_dict)
# print(result) 

def difference_sets(set1, set2):
    my_set = set1.difference(set2)
    return my_set


result = difference_sets({1, 2, 3}, {3, 4, 5})
print(result)