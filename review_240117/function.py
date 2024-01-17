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