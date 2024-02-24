N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

visited = [[0 for _ in range(1001)] for _ in range(1001)]

for k in range(N) :
    for i in range(arr[k][2]) :
        for j in range(arr[k][3]) :
            visited[arr[k][0]+i][arr[k][1]+j] = k+1


for w in range(1, N+1) :
    cnt = 0
    for i in range(1001) :
        for j in range(1001) :
            if visited[i][j] == w :
                cnt += 1
    print(cnt)





