import json
from pprint import pprint


def book_info(book, categories):
    gernes = []
    for i in range(len(categories)) :
        for j in range(0, 2) :
            if categories[i].get('id')  == book.get('categoryId')[j] :
                gernes.append(categories[i].get('name'))

    info = {'author': book.get('author'),
            'categoryName': gernes,
            'cover': book.get('cover'),
            'description': book.get('description'),
            'id': book.get('id'),
            'priceSales': book.get('priceSales'),
            'title': book.get('title')
            }
    return info


# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    book_json = open('data/book.json', encoding='utf-8')
    book = json.load(book_json)

    categories_json = open('data/categories.json', encoding='utf-8')
    categories_list = json.load(categories_json)

    pprint(book_info(book, categories_list))
