import sys
sys.stdin = open('input.txt')


def dfs(x, y) :
    dx = [0, 0, 1]
    dy = [1, -1, 0]

    if visited[x][y] == 0 :
        visited[x][y] = 1

    for j in range(3) :
        temp_x = x + dx[j]
        temp_y = y + dy[j]

        if 0 <= temp_x < 100 and 0 <= temp_y < 100 :
            if ladder[temp_x][temp_y] != 0 and visited[temp_x][temp_y] == 0 :
                if ladder[temp_x][temp_y] == 2 :
                    return True
                else :
                    dfs(temp_x, temp_y)
    return False




for _ in range(1, 11) :
    tc = int(input())
    ladder = [list(map(int, input().split())) for _ in range(100)]

    for i in range(len(ladder)) :
        if ladder[0][i] == 1 :
            visited = [[0 for _ in range(101)] for _ in range(101)]
            dfs(0, i)
            if dfs(0, i) :
                print(i)



