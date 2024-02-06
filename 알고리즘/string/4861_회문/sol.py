import sys
sys.stdin = open('input.txt')

T = int(input())


# 방법1
for tc in range(1, T+1) :
    N, M = map(int, input().split())

    arr = []
    for _ in range(N) :
        arr.append(input())
#
#     # 가로
    for i in range(N) :
        for j in range(N) :
                if j + M <= N :
                    str1 = arr[i][j:j+M]
                    str2 = str1[::-1]

                    if str1 == str2 :
                        print(f'#{tc} {str1}')

    # 세로
    total = []

    for i in range(N) :
        temp_lst = []
        for j in range(N) :
            temp_lst.append(arr[j][i])
        temp_str = ''.join(temp_lst)
        total.append(temp_str)

    for i in range(N) :
        for j in range(N) :
            if j+M <= N :
                str1 = total[i][j:j+M]
                str2 = str1[::-1]

                if str1 == str2 :
                    print(f'#{tc} {str1}')


# 방법2
for tc in range(1, T+1) :
    N, M = map(int, input().split())

    result = []

    arr = []
    for _ in range(N) :
        arr.append(input())


    # 가로
    for i in range(N) :
        for j in range(N-M+1) :
            if arr[i][j:j+M] == arr[i][j:j+M][::-1] :
                result.append(arr[i][j:j+M])

    # 세로
    for i in range(N-M+1) :
        for j in range(N) :
            temp_lst = []
            for k in range(M) :
                temp_lst.append(arr[i+k][j])
            if temp_lst == temp_lst[::-1] :
                result.append(''.join(temp_lst))
    print('# {} {}'.format(tc, result[0]))