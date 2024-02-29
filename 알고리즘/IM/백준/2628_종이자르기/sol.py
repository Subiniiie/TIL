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
max_sum = 0
for i in garo_moeum[0:-1] :
     if i == 0 :
         x = garo_moeum[0]
     else :
         x = garo_moeum[i-1] - garo_moeum[i]

     for j in sero_moeum[0:-1] :
         if j == 0 :
             y = sero_moeum[0]
         else :
             y = sero_moeum[i-1] - sero_moeum[i]

         if max_sum < x * y :
             max_sum = x * y
print(max_sum)
