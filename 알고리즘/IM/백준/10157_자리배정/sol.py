def col(p, c, r) :
    global is_status
    global C
    global R
    global result

    if is_status == True :
        if p >= R :
            for i in range(R) :
                if seats[i][C-c] == 0 :
                    seats[i][C-c] = 1
                    p -= 1
            is_status = False
            row(p, c+1, r+1)

        else :
            for i in range(R) :
                p -= 1
                if p == 0 :
                    result.append(i)


    else  :
        if p >= R :
            for i in range(R, -1, -1) :
                if seats[i][C-c] == 0 :
                    seats[i][C-c] = 1
                    p -= 1
            is_status = True
            row(p, c-1, r-1)

        else :
            for i in range(R, -1, -1) :
                p -= 1
                if p == 0 :
                    result.append(i)
    return result


def row(p, c, r):
    global is_status
    global C
    global R
    global result

    if is_status == True:
        if p >= C:
            for j in range(C):
                if seats[j][R] == 0:
                    seats[j][R] = 1
                    p -= 1
            is_status = False
            row(p, c + 1, r + 1)

        else:
            for j in range(C):
                p -= 1
                if p == 0:
                    result.append(j)

    else :
        if p >= C:
            for j in range(C, -1, -1):
                if seats[j][R-r] == 0:
                    seats[j][R-r] = 1
                    p -= 1
            is_status = True
            row(p, c + 1, r + 1)

        else:
            for j in range(C, -1, -1):
                p -= 1
                if p == 0:
                    result.append(j)
    return result

C, R = map(int, input().split())
K = int(input())

seats = [[0 for _ in range(C)] for _ in range(R)]
is_status = True
result = []
col(K, C, R)


