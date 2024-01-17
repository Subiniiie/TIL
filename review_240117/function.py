#기본 공식
def some_func(parm1, parm2) :
    result = parm1 + parm2
    print(result)
    
some_func(1, 2)

def info(name, age) :
    print(f'이름은 {name}이고, 나이는 {age}살입니다.')
    
info('홍길동', 25)

#함수 내부 / 함수 외부
def other_func(parm1, parm2) :
    result = parm1 * parm2
    print(result, '함수 내부에서 발생')
    return result

answer = other_func('라', 3)
print(answer, '함수 외부에서 발생')

#LEGB
a = 1
b = 2

def enclosed() :
    a = 10
    c = 3
    
    def local(c) :
        print(a, b, c)   #10 2 500
        
    local(500)
    print(a, b, c)  #10 2 3
    
enclosed()
print(a, b)  #1 2


#sort 매서드 / sorted 함수
#리스트를 오름차순으로 정렬하자
numbers = [5, 4, 3, 2, 1]

#sort() 매서드
result = numbers.sort()
print(result)   #None
print(numbers)

#sorted() 함수
result = sorted(numbers)
print(result)
print(numbers)

#글로벌 변수
global_var = 100
my_list = [1, 2, 3]

def local() :
    my_list[0] = 100
    print(my_list)
    
local()  #함수 호출(def된 함수와 들여쓰기 일치)

global_var = 100
def local() :
    print(global_var)
    #global_var += 1    #글로벌 변수의 값은 로컬에서 변경할 수 없다
    print(global_var)
    
local()

#글로벌 스코프에 정의된 값 바꾸기
global_var = 100

def local(parm) :
    parm += 3
    return parm

global_var = local(global_var)
print(global_var)

#로컬에서 global 함수 사용(추천x)
global_var = 100

def local() :
    global global_var
    global_var += 3
    print(global_var)

local()
print(global_var)
