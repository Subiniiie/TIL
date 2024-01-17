'''
대여점이 보유중인 총 도서 수를 관리하는 코드
'''

number_of_book = 100

def rental_book(name, number) :
    decrease_book(number)
    print(f'{name}님이 {number}권의 책을 대여하였습니다.')
    
    
def decrease_book(book) :
    left_book = number_of_book - book
    print('남은 책의 수 :', left_book)
        
rental_book('홍길동', 3)
        