garo, sero = map(int, input().split())
number = int(input())
arr = [list(map(int, input().split()))for _ in range(number)]

garo_moeum = []
sero_moeum = []

for k in range(number) :
    if arr[k][0] == 0 :
        garo_moeum.append(arr[k][1])
    else :
        sero_moeum.append(arr[k][1])

garo_moeum.sort()
sero_moeum.sort()

max_num = 0
for i in range(len(garo_moeum)) :
    if i == 0 :
        x = garo_moeum[i]
    if j == 0 :
        y = sero_moeum[j]
    if i == len(garo_moeum)-1 :
        x = len(garo_moeum)-garo_moeum[-2]
    if j == len(sero_moeum)-1 :
        y = len(sero_moeum)-garo_moeum[-2]
    if i != 0 and j != 0 :
        x = garo_moeum[i]-garo_moeum[i-1]
        y = sero_moeum[i]-sero_moeum[i-1]
    if max_num < x * y :
        max_num = x * y
print(max_num)