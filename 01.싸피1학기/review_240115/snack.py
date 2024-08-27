snacks = ['새우깡', '알감자', '롯데샌드', '빼빼로', '새우깡', '바나나킥', '새우깡', '알감자', '칸쵸', '바나나킥','빼빼로', '새우깡', '오징어칩', '새우깡', '알감자', '칸쵸', '롯데샌드']

#중복을 제거하시오


# 1
# result = []
# for snack in snacks :
#     if snack not in result :
#         result.append(snack)
# print(result)

# 2
result = []
for i in range(len(snacks)) :
    temp = []
    for snack in snacks[i+1:] :
        if snacks[i] == snack :
            temp.append(snack)
    if len(temp) == 0 :
        result.append(snacks[i])
print(result)
