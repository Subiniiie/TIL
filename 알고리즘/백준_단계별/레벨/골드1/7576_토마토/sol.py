import sys
M, N = map(int, sys.stdin.readline().split())

arr = []
for _ in range(N) :
    arr.append(list(map(int, sys.stdin.readline().split())))

cnt = 0
checked = [[0 for _ in range(M)] for _ in range(N)]

def tomato(x, y) :
    global cnt

    checked[x][y] = 1
    check = False

    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]

    for i in range(4) :
        temp_x = x + dx[i]
        temp_y = y + dy[i]
        if 0 <= temp_x < M and 0 <= temp_y < N :
            check = True
            tomato(temp_x, temp_y)
    if check == True :
        cnt += 1


for i in range(N) :
    for j in range(M) :
        if arr[i][j] == 1 :
            tomato(i, j)
