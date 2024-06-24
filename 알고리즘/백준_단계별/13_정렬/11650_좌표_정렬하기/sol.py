import sys
N = int(sys.stdin.readline())
arr = []
for _ in range(N):
    arr.append(list(map(int, sys.stdin.readline().split())))

def merged_sort(arr) :
    def sort(low, high) :
        if high - low < 2 :
            return
        mid = (low + high) // 2
        sort(low, mid)
        sort(mid, high)
        merge(low, mid, high)
    def merge(low, mid, high) :
        temp = []
        l = low
        h = mid
        while l < mid and h < high :
            if arr[l][0] < arr[h][0] :
                temp.append(arr[l])
                l += 1
            else :
                temp.append(arr[h])
                h += 1
        while l < mid :
            temp.append(arr[l])
            l += 1
        while h < high :
            temp.append(arr[h])
            h += 1
        for i in range(low, high) :
            arr[i] = temp[i-low]

    sort(0, len(arr))
    return arr
sorted_arr = merged_sort(arr)

i = 0
while i < N  :
    if i < N - 1 :
        if sorted_arr[i][0] == sorted_arr[i+1][0] :
            if sorted_arr[i][1] < sorted_arr[i+1][1] :
                print(*sorted_arr[i])
                i += 1
            else :
                print(*sorted_arr[i+1])
                print(*sorted_arr[i])
                i += 2
        else :
            print(*sorted_arr[i])
            i += 1
    else :
        print(*sorted_arr[i])
        i += 1
