# def count_character(my_str, word):
    
#     return my_str.count(word)

# result = count_character("Hello, World!", "o")
# print(result)  # 2


# def find_min_max(my_list):
#     my_max = max(my_list)
#     my_min = min(my_list)
    
#     return my_min, my_max


# result = find_min_max([3, 1, 7, 2, 5])
# print(result)  # (1, 7)


# def reverse_string(my_str):
#     my_list = list(my_str)
#     my_list.reverse()
#     my_reversed_str = ''.join(my_list)
    
#     return my_reversed_str


# result = reverse_string("Hello, World!")
# print(result)


# N = 9
# data_1 = '123456789'
# arr_1 = []
# # 아래에 코드를 작성하시오.
# for i in range(N) :
#     arr_1.append(data_1[i])
# print(arr_1)

# M = 15
# data_2 = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15'
# # 아래에 코드를 작성하시오.
# arr_2 = list(data_2.split(' '))
# for num in arr_2 :
#     if int(num) % 2 :
#         print(num)


# 아래 함수를 수정하시오.
# def remove_duplicates(my_list):
#     new_lst = []
            
#     my_set = set(my_list)
#     new_lst = list(my_set)
    
#     return new_lst


# result = remove_duplicates([1, 2, 2, 3, 4, 4, 5])
# print(result)


# data_1 = 'qweqwYadnOyjnsaU4trwg asjnaAn245krRmkfE 42grTasdnHasdnvEasdn asdevadnBasdanEsdkqefqefvaSasdqaeeqqvedwt5hfbsdT24tewfd'
# '''
# 예시코드
# arr = [1, 2, 3, 4, 5]
# for num in arr:
#     print(num, end='')
# 출력결과 : 12345
# '''
# 아래에 코드를 작성하시오.
# for char in data_1 :
#     if char.isupper() == True or char == ' ':
#         print(char, end='')

# data_2 = '걉파반샤팝다푸거맥파바자들퍼바배들밥샵파누타히매니배사바파힘다브사부힙헤베내테치대내'
# arr = []
# # 아래에 코드를 작성하시오.
# print('\t')
# for i in '내힘들다' :
#     num = data_2.find(i)
#     arr.append(num)
 
# print(arr) 
   
# arr.sort()
# print(arr)

# for j in arr :
#     print(data_2[j], end='')


# def sort_tuple(my_tuple):
#     new_tuple = tuple(sorted(my_tuple))
    
#     return new_tuple


# result = sort_tuple((5, 2, 8, 1, 3))
# print(result)
    
    
# def restructure_word(word, arr):
#     for char in word :
#         if char.isdecimal() :
#             for i in range(int(char)) :
#                 arr.pop()
#         else :
#             arr.remove(char)
#     return arr
   


# original_word = '코딩 공부는ㄴ 1일ㄹ 1커ㅓ밋ㅅ @@@#^()#_+!&~:"'
# word = '1ㄴ2ㄹ3ㅓ4ㅅ5'
# arr = []

# arr.extend(original_word)
# print(arr)

# result = restructure_word(word, arr)
# print(result)
# result_word = ''.join(result)
# print(result_word)


# 아래 함수를 수정하시오.
# def capitalize_words(word):
#     new_list = list(word.split(' '))
    
#     for i in range(len(new_list)) :
#         new_list[i] = new_list[i].capitalize()
#     new_word = ' '.join(new_list)   
#     return new_word


# result = capitalize_words("hello, world!")
# print(result)

def even_elements(my_list):
    for num in my_list :
        if num % 2 :
            my_list.remove(num)
    return my_list

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = even_elements(my_list)
print(result)