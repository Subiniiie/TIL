num1 = 2
num2 = 5
num_lst = [1, 2, 4, 3, 5, 6, 7]
num_tuple = (4, 3, 5, 2, 6)

# print(sum(list(num1), num_lst)) 
print(sum(num_lst))
print(sum(num_tuple))

# print(sum(list(num_tuple), num_lst))
print(sum(list(num_tuple)) + sum(num_lst))