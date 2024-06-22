import sys
N = int(sys.stdin.readline())
arr = []
for _ in range(N):
    arr.append(int(sys.stdin.readline()))

def merge_sort(arr):
    def sort(low, high):
        if high - low < 2:
            return
        mid = (low + high) // 2
        sort(low, mid)
        sort(mid, high)
        merge(low, mid, high)

    def merge(low, mid, high):
        temp = []
        l, h = low, mid

        while l < mid and h < high :
            if arr[l] < arr[h] :
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
            arr[i] = temp[i - low]

    sort(0, len(arr))
    return arr

sorted_arr = merge_sort(arr)
for i in sorted_arr :
    print(i)
