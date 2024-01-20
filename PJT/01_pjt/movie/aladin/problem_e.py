import json


def new_books(books):
    title_2023 = []

    for i in range(len(books_list)) :
        id = books_list[i].get('id')
        book_json = open('C:/Users/SSAFY/Desktop/01_pjt/movie/aladin/data/books/'+str(id)+'.json', encoding='utf-8')
        book_list = json.load(book_json)

        if int(book_list.get('pubDate').split('-')[0]) == 2023 :
            title_2023.append(book_list.get('title'))
    return title_2023

# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    books_json = open('data/books.json', encoding='utf-8')
    books_list = json.load(books_json)

    print(new_books(books_list))
