# aladin

### problem_a

딕셔너리를 만들 때, {키: 값}이 하나이면 값 뒤에 쉼표(,)를 넣어야 한다
{'키': 값,}
  
book.get('title')
-> .get 뒤에 ()만
-> bool.get['title'] X


### problem_b

-리스트[]에서 .get 사용할 수 없음
리스트 안에 딕셔너리가 있는 경우 [{키1: 값1}, {키2: 값2}, {키3: 값3}]

-> 인덱스를 이용해 딕셔너리에 접근해야 함

lst = [{'키1': 값1}, {'키'2: 값2}, {'키3': 값3}]

lst[1].get('키2')   -> 값2 출력



### problem_c

books[i].get('categoryId')[z]   
-> books리스트의 i번째 값(딕셔너리)의 categoryId key의 값(리스트)의 z번째 값

```
book_list = []

    for i in range(1, n) :
        gernes = []
        
        코드 작성
           gernes.append()

    book_list.append()
```

리스트를 만들고 그 리스트에 값 추가할 때
들여쓰기 확인


### problem_d

```
max = 0   -> 평점 비교 변수   
title = ''  -> 최고 평점을 가진 도서 제목 넣을 변수   
=> 설정 한 후 max값을 일일이 비교해야함

books 폴더에 있는 json 파일들의 제목이 id 키의 값이므로   
for i in range(len(books_list)) :
    books_list[i].get('id')  -> id 키의 값을 추출한 후

open('C:/Users/SSAFY/Desktop/01_pjt/movie/aladin/data/books/'+str(id)+'.json', encoding='utf-8')     -> 경로에 넣어서 파일 열기
```


### problem_e


book_list = {"pubDate": "2000-06-20",}

if int(book_list.get('pubDate').split('-')[0]) == 2023 :   
->'-'를 기준으로 나눠줌    
-> 2000, 06, 20 순서대로 0번쨰, 1번째, 2번째

-> "2000-06-20"은 큰따옴표 안에 있으므로 문자열(str)임
-> int()로 감싸줘야 2023과 비교 가능



### problem_f_1

pub_2023 = []
max = 0
title = ''

-> 설정한 뒤 2023년에 출판된 도서만 리스트에 담아 가장 평점이 높은 도서 출력


```
if int(book_list.get('pubDate').split('-')[0]) == 2023 :
            pub_2023.append(book_list.get('title'))
           
            if book_list.get('customerReviewRank') > max :
                    max = book_list.get('customerReviewRank')
                    title = book_list.get('title')
```

-> 만약 2023년에 출판된 도서라면 평점 비교하기



### problem_f_2

판매가격 비교 어떻게 하는지??

```
for i in range(len(books)) :
        if books[i].get('categoryId')[0] == 2721 or  books[i].get('categoryId')[1] == 2721 :
            computer_books.append(books[i])
```

----> 카테고리가 컴퓨터 공학인 도서들만 리스트 만듦


```
for j in range(len(computer_books)) :
        if len(result) == 0 :
            result.append(computer_books[j].get('title'))
            prices.append(computer_books[j].get('priceSales'))
            print(result)
            print(prices)
        elif len(result) == 1 :
            if prices[0] < computer_books[j].get('priceSales') :
                prices[1] = computer_books[j].get('priceSales')
                result[1] = computer_books[j].get('title')
        else :
            while z < range(computer_books) :
                if prices[z] <= computer_books[j].get('priceSales') <= prices[z+1] :
                        result[z+1] = computer_books[j].get('title')
                        prices[z+1] = computer_books[j].get('priceSales')
                print(result)
                print(prices)
                z + 1
```

----> 컴퓨터공학 리스트를 반복하면서 제목(result) 리스트에 값이 없으면 제목(result)과 가격(prices) 리스트에 첫 번째 컴퓨터 공학 책 넣음   
----> 제목 리스트에 값이 1개 있으면 가격을 비교해서 큰지 작은지 리스트에 삽입   
----> 제목 리스트에 값이 2개 이상 있으면 0과 0+1 위치, 1과 1+1 위치... 점점 1씩 커지게 두 가격을 비교해서 그 사이 값이면 넣기   
어려움!!!!!11111!! 




## spotify

### problem_a

'genres_ids': artist_dict.get('genres_ids')   
---> .get을 기준으로 왼쪽에서 오른쪽 값을 가져온다   
.get('')--> 괄호!!!!


### problem_b
```
for num in artist_dict.get('genres_ids') :    ---> artist_dict에 있는 genres_ids 키의 값을 반복
        for i in range(len(genres_list)) :    ---> genres_list 안에 있는 값의 개수만큼 반복
```


### problem_c
```
for i in range(len(artists_list)) : 
        names = []
        for num in artists_list[i].get('genres_ids') :
            for j in range(len(genres_list)) :
                if num == genres_list[j].get('id') :
                    names.append(genres_list[j].get('name'))

----> 어떤 리스트를 반복하는지 확인하기
```


### problem_d
'uri-id': info_list.get('uri').split(':')[2]   
---> info_list_get('url')의 값을 ':'을 기준으로 나눠서 그 중 인덱스 2(3번째 자리)의 값




## finace

### problem1
```
api_key  ----> 깃허브에 올릴 때 지우기
url = 'http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json'--> .json인지 확인/xml 아님!!
url = 'http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json'
  params = {
            'auto': api_key,
            'topFinGropNo': '020000',
            'pageNo': 1
  }```
  response = requests.get(url, params = params).json()   
  ----> url에서 params의 키와 값을 이어붙임

  url = f'http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth={api_key}&topFinGrpNo=020000&pageNo=1'   
  -----> params 값을 url에 씀



```url = f'https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth={api_key}&topFinGrpNo=020000&pageNo=1'

  response = requests.get(url).json()
  return response.get('result').keys()
  
  >> dict_keys(['prdt_div', 'total_count', 'max_page_no', 'now_page_no', 'err_cd', 'err_msg', 'baseList', 'optionList'])


 url = 'https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json'
  params = {
            'auto': api_key,
            'topFinGrpNo': '020000',
            'pageNo': 1
  }
  
  response = requests.get(url, params = params).json()
  return response.get('result').keys()
  
  >> dict_keys(['err_cd', 'err_msg', 'total_count'])
  ```

  ---------> 차이점 뭐임? 왜 출력되는 값이 다름?


  ### problem2
  ```
  response.get('result').get('baseList')
  ```
  responce 딕셔너리의 result 키의 값 딕셔너리에서 baseList   



  ### problem3

  ```
  base = response.get('result').get('baseList')
  option = response.get('result').get('optionList')
  ```

  ----> 한 상품에 옵션이 여러 개 있음   
  ----> base와 option의 개수가 다름


```
result_list = []


for i in range(len(base)) :
for j in range(len(option)) :
    new_dict = {}
    if base[i].get('fin_co_no') == option[j].get('fin_co_no') : 
        new_dict['금융상품코드'] = base[i].get('fin_prdt_cd') 
        new_dict['저축 금리'] = option[j].get('intr_rate')
        new_dict['저축 기간'] = option[j].get('save_trm')
        new_dict['저축금리유형'] = option[j].get('intr_rate_type')
        new_dict['저축금리유형명'] = option[j].get('intr_rate_type_nm')
        new_dict['최고 우대금리'] = option[j].get('intr_rate2')
        result_list.append(new_dict)
print(result_list)
```


------> result_list에 new_dict 딕셔너리에 넣은 옵션값들을 넣음

result = ? 아마 baseList 또는 optionList로 하고 문제 푼듯 
  
```
for i in range(len(result)) :
    new_dict = {}
    new_dict['금융상품코드'] = result[i].get('fin_prdt_cd')    ----> baseList에 있음 나머지는 optionList에 있음
    new_dict['저축 금리'] = result[i].get('intr_rate')
    new_dict['저축 기간'] = result[i].get('save_trm')
    new_dict['저축금리유형'] = result[i].get('intr_rate_type')
    new_dict['저축금리유형명'] = result[i].get('intr_rate_type_nm')
    new_dict['최고 우대금리'] = result[i].get('intr_rate2')
return result
```


-------> baseList와 optionList의 길이가 다르므로 에러 뜸

```
 return result[i].get('fin_prdt_cd', 'intr_rate', 'save_trm', 'intr_rate_type', 'intr_rate_type_nm', 'intr_rate2')
 ```
.get()    괄호() 안에 키 값 여러 개 못 넣음??



### problem4
들여쓰기 잘 보기

```
result_list = []
    
    for i in range(len(base)) :
        temp = []
        result_dict = {}
        for j in range(len(option)) :
            if base[i].get('fin_co_no') == option[j].get('fin_co_no') :
                temp_dict = {'저축 금리': option[j].get('intr_rate'),
                             '저축 기간' : option[j].get('save_trm'),
                             '저축금리유형' : option[j].get('intr_rate_type'),
                             '저축금리유형명' : option[j].get('intr_rate_type_nm'),
                             '최고 우대금리' : option[j].get('intr_rate2'),
                }
                temp.append(temp_dict)

            
        result_dict['금리정보'] = temp
        result_dict['금융상품명'] = base[i].get('fin_prdt_nm')
        result_dict['금융회사명'] = base[i].get('kor_co_nm')
        
    
        result_list.append(result_dict)
```

i = 0이고 j는 0일 때,   
if base[i].get('fin_co_no') == option[j].get('fin_co_no')가 참이면   
temp_dict에 저장된 딕셔너리는 temp리스트에 추가되고    
i가 1이고 j가 for문을 반복할 동안   
temp 리스트에 값이 누적되면서 추가됨  
option의 길이만큼 for문이 반복되면   
i = 0일 때  
result_dict 딕셔너리에 값 추가하고 그 값이 result_list에 추가됨   
i = 1이 되면   
temp리스트와 result_dict 딕셔너리의 값은 새로운 갑이 되고   
result_list 리스트만 누적되면서 값이 추가   
