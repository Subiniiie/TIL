import json
from pprint import pprint


def books_info(books, categories):
    book_list = []

    for i in range(len(books)) :
        gernes = []
        for j in range(len(categories)) :
            for z in range(0, 2) :
                if books[i].get('categoryId')[z] == categories[j].get('id') :
                    gernes.append(categories[j].get('name'))
        info = {'author': books[i].get('author'),
            'categoryName': gernes,
            'cover': books[i].get('cover'),
            'description': books[i].get('description'),
            'id': books[i].get('id'),
            'priceSales': books[i].get('priceSales'),
            'title': books[i].get('title')
            }
        book_list.append(info)
    return book_list



# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    books_json = open('data/books.json', encoding='utf-8')
    books = json.load(books_json)

    categories_json = open('data/categories.json', encoding='utf-8')
    categories_list = json.load(categories_json)

    pprint(books_info(books, categories_list))
