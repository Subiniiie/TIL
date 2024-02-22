import sys
sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1) :
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    visited = [[0 for _ in range(N)] for _ in range(N)]
    # 1 : B(흑돌), 2 : W(백돌)
    n = N // 2
    for _ in range(4) :
        visited[n][n] = 2
        visited[n][n-1] = 1
        visited[n-1][n-1] = 2
        visited[n-1][n] = 1



