import sys
sys.stdin = open('input.txt')

N = int(input())
switch = list(map(int, input().split()))
students = int(input())
arr = [list(map(int, input().split())) for _ in range(students)]

switch.insert(0, 0)

for i in range(len(arr)) :
    if arr[i][0] == 1 :
        k = arr[i][1]
        r = arr[i][1]
        while r <= N :
            if switch[r] == 0 :
                switch[r] = 1
            else :
                switch[r] = 0
            r += k
    else :
        l = arr[i][1]
        if switch[l] == 0 :
            switch[l] = 1
        else :
            switch[l] = 0

        w = 1
        while switch[l-w] == switch[l+w] :
            if l-w == 0 :
                break
            else :
                if switch[l-w] == switch[l+w] == 0 :
                    switch[l-w] = switch[l+w] = 1
                else :
                    switch[l-w] = switch[l+w] = 0
            w += 1

print(*switch[1:])




