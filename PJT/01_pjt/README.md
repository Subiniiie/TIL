## aladin

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

book_list = []

    for i in range(1, n) :
        gernes = []
        '''
        코드
        '''
           gernes.append()

    book_list.append()

리스트를 만들고 그 리스트에 값 추가할 때
들여쓰기 확인


### problem_d

max = 0   -> 평점 비교 변수
title = ''  -> 최고 평점을 가진 도서 제목 넣을 변수
=> 설정 한 후 max값을 일일이 비교해야함

books 폴더에 있는 json 파일들의 제목이 id 키의 값이므로
for i in range(len(books_list)) :
    books_list[i].get('id')  -> id 키의 값을 추출한 후

open('C:/Users/SSAFY/Desktop/01_pjt/movie/aladin/data/books/'+str(id)+'.json', encoding='utf-8')  -> 경로에 넣어서 파일 열기


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


if int(book_list.get('pubDate').split('-')[0]) == 2023 :
            pub_2023.append(book_list.get('title'))
           
            if book_list.get('customerReviewRank') > max :
                    max = book_list.get('customerReviewRank')
                    title = book_list.get('title')

-> 만약 2023년에 출판된 도서라면 평점 비교하기



### problem_f_2

판매가격 비교 어떻게 하는지??

for i in range(len(books)) :
        if books[i].get('categoryId')[0] == 2721 or  books[i].get('categoryId')[1] == 2721 :
            computer_books.append(books[i])

----> 카테고리가 컴퓨터 공학인 도서들만 리스트 만듦


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
for num in artist_dict.get('genres_ids') :    ---> artist_dict에 있는 genres_ids 키의 값을 반복
        for i in range(len(genres_list)) :    ---> genres_list 안에 있는 값의 개수만큼 반복


### problem_c
for i in range(len(artists_list)) :  ---->
        names = []
        for num in artists_list[i].get('genres_ids') :
            for j in range(len(genres_list)) :
                if num == genres_list[j].get('id') :
                    names.append(genres_list[j].get('name'))

----> 어떤 리스트를 반복하는지 확인하기


### problem_d
'uri-id': info_list.get('uri').split(':')[2]
---> info_list_get('url')의 값을 ':'을 기준으로 나눠서 그 중 인덱스 2(3번째 자리)의 값