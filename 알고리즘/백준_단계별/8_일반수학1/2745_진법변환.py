alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
         'H', 'I', 'J', 'K', 'L', 'M', 'N',
         'O', 'P', 'Q', 'R', 'S', 'T', 'U',
         'V', 'W', 'X', 'Y', 'Z']

dict = {}
k = 9
for key in alpha :
    dict[key] = k + 1
    k += 1

arr = list(input().split())

sum_num = 0
# 10진법을 넘어가는 경우
if int(arr[1]) > 10 :
    for i in range(len(arr[0])) :
        if arr[0][i] in '123456789' :
            sum_num += int(arr[0][i]) * (int(arr[1]) ** (len(arr[0]) - (i+1)))
        else :
            for key in dict.keys() :
                sum_num




sum_num = 0
for i in range(len(arr[0])) :
    sum_num += dict[key] * (int(arr[1]) ** i)
print(sum_num)


# 10진법을 넘지 않는 경우