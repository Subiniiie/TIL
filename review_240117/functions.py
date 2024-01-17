#절대값
negative = -5
print(abs(negative))

#boolean 타입
empty_list = {}
number = 6

print(bool(empty_list))   #False
print(bool(number))       #True
print(bool(6 % 2))        #False
print(bool('나'))         #True

#리스트에 있는 값 더하기
num_list = [3, 4, 2, 6, 7]

def num_sum(lst) :
    result = sum(lst)
    print(result)
    
num_sum(num_list)
    
#오름차순 정렬
words = ['원숭이', '개구리', '하마', '얼룩말', '나비']

result_1 = words.sort()
print(words)
print(result_1)

words = ['원숭이', '개구리',  '하마', '얼룩말', '나비']

result_2 = sorted(words)
print(words)
print(result_2)