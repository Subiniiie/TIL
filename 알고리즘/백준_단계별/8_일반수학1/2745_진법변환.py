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

for key in dict.keys() :
    if key == arr[0][0] :
        break

sum_num = 0
for i in range(len(arr[0])) :
    sum_num += dict[key] * (int(arr[1]) ** i)
print(sum_num)
