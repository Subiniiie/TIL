#리스트
my_list1 = [1, 2, 3]

my_list1.append(4)
print(my_list1)

#extend 반복 가능한 객체 추가
my_list2 = [1, 2, 3]
my_list2.extend([4, 5, 6])
print(my_list2)

my_list3 = [1, 2, 3]
my_list3.extend(range(4))
print(my_list3)

my_list4 = [1, 2, 3]
my_list4.extend((4, 5, 6))
print(my_list4)

my_list5 = [1, 2, 3]
my_list5.extend({'1': '일', '2': '이'})
print(my_list5)

my_dict = {'1': '일', '2': '이'}
my_list6 = [1, 2, 3]
my_list6.extend(my_dict.values())
print(my_list6)

my_list7 = [1, 2, 3]
my_list7.insert(2, 'ssafy')
print(my_list7)


my_list8 = [1, 4, 5, 4, 3, 1, 2]
my_list8.remove(4)
print(my_list8)

my_list9 = [1, 2, 3, 4, 5]
item1 = my_list9.pop()
print(item1)
item2 = my_list9.pop()
print(item2)


my_list10 = [1, 2, 3]
my_list10.clear()
print(my_list10)


my_list11 = [1, 2, 3, 4, 5]
index1 = my_list11.index(3)
print(index1)


my_list12 = [1, 3, 2, 2, 3, 1, 2, 3, 4]
count1 = my_list12.count(2)
print(count1)


my_list13 = [4, 2, 3, 1, 5]
my_list13.sort()
print(my_list13)
my_list13.sort(reverse = True)
print(my_list13)

my_list13 = [3, 4, 2, 1, 5]
my_list13.reverse()
print(my_list13)