import sys
sys.stdin = open('input.txt')

T = int(input())

# 첫 번째 방법
for tc in range(1, T+1) :
    str1 = input()
    str2 = input()

    max_num = 0
    for i in str1 :
        cnt = 0
        for j in str2 :
            if i == j :
                cnt += 1

        if max_num < cnt :
            max_num = cnt
    print(f'#{tc} {max_num}')


# 두 번째 방법
for tc in range(1, T+1) :
    str1 = input()
    str2 = input()

    cnt_lst = []
    for i in str1 :
        cnt = 0
        for j in str2 :
            if i == j :
                cnt += 1
        cnt_lst.append(cnt)
    print(f'#{tc} {max(cnt_lst)}')
