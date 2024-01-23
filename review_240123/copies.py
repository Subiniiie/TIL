#변경 가능한 데이터

a = [1, 2, 3, 4, 5]
b = a

b[0] = 100

print(a)
print(b)

#변경 불가능한 데이터
a = 100
b = a

b = 9

print(a)
print(b)


#할당
original_list = [1, 2, 3]
copy_list = original_list

copy_list[0] = 100

print(original_list)
print(copy_list)


#얕은 복사
a = [1, 2, 3]
b = a[:]

b[0] = 100

print(a)
print(b)


a = [1, 2, [100, 200]]
b = a[:]

b[0] = 100

print(a)
print(b)

b[2][0] = 400

print(a)
print(b)