import json


def best_book(books):
    max = 0
    title = ''

    for i in range(len(books_list)) :
        id = books_list[i].get('id')
        id_json = open('C:/Users/SSAFY/Desktop/01_pjt/movie/aladin/data/books/'+str(id)+'.json', encoding='utf-8')
        id_list = json.load(id_json)
        rank = id_list.get('customerReviewRank')
        if rank > max:
            max = rank
            title = id_list.get('title')
    return title


# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    books_json = open('data/books.json', encoding='utf-8')
    books_list = json.load(books_json)

    print(best_book(books_list))
