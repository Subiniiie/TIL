import json


def sorted_cs_books_by_price(books, categories):
    computer_books = []
    prices = []
    result = []
    price = 0
    z = 1

    for i in range(len(books)) :
        if books[i].get('categoryId')[0] == 2721 or  books[i].get('categoryId')[1] == 2721 :
            computer_books.append(books[i])
            
    # for i in range(len(computer_books)) :
    #     print(computer_books[i].get('title'))


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
        
                   

    return result

       
    
    

        
    

    pass


# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    books_json = open('data/books.json', encoding='utf-8')
    books = json.load(books_json)

    categories_json = open('data/categories.json', encoding='utf-8')
    categories_list = json.load(categories_json)

    print(sorted_cs_books_by_price(books, categories_list))
