import json


def best_new_books(books):
    pub_2023 = []
    max = 0
    title = ''

    for i in range(len(books_list)) :
        id = books_list[i].get('id')
        book_json = open('C:/Users/SSAFY/Desktop/01_pjt/movie/aladin/data/books/'+str(id)+'.json', encoding='utf-8')
        book_list = json.load(book_json)

        if int(book_list.get('pubDate').split('-')[0]) == 2023 :
            pub_2023.append(book_list.get('title'))
           
            if book_list.get('customerReviewRank') > max :
                    max = book_list.get('customerReviewRank')
                    title = book_list.get('title')
    return title   



# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    books_json = open('data/books.json', encoding='utf-8')
    books_list = json.load(books_json)

    print(best_new_books(books_list))
