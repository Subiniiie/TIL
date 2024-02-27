cnt = 0
h = []

arr = [int(input()) for _ in range(9)]

path = []

def f(x, sum) :
    if x == 9 :
        print(path)
        return

    for i in range(1, max(arr)+1) :
        if used[arr[i]] == True :
            continue
        used[arr[i]] = True
        path.append(arr[i])
        f(arr)
        path.pop()
        used[arr[i]] = False

f(arr[0])
