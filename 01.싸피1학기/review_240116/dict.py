#딕셔너리 정렬

products = {'TV': 2000000,
            '냉장고': 1500000,
            '책상': 350000,
            '노트북': 1200000,
            '가스레인지': 200000,
            '세탁기': 1000000}

#value를 기준으로 내림차순 정렬
result = dict(sorted(products.items(), key = lambda x :x[1],reverse = True))
#x[1] : value를 기준으로 정렬
#reverse = True : 내림차순 정렬
for key, value in result.items() :
    print(key,':', value)