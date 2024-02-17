import sys
sys.stdin = open('input.txt')

dx = [0, -1, 0, 1]
dy = [1, 0, -1, 0]
s = []
result = []

def DFS(x, y) :
    global cnt
    s.append([x, y])

    if visited[x][y] == 0 :
        visited[x][y] = 1

        route.append([x, y])

        now_x = x
        now_y = y

        for i in range(4) :
            temp_x = now_x + dx[i]
            temp_y = now_y + dy[i]

            if 0 <= temp_x < n and 0 <= temp_y < n :
                if visited[temp_x][temp_y] == 0 and arr[temp_x][temp_y] != 0 :

                    DFS(temp_x, temp_y)



    return result

T = int(input())

for tc in range(1, T+1) :
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]

    visited = [[0 for _ in range(n)] for _ in range(n)]
    route = []

    for k in range(n) :
        for l in range(n) :
            if arr[k][l] != 0 :
                DFS(k, l)
    print(f'######{tc}', DFS(0, 0))