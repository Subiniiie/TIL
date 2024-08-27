# 문자열
my_str = 'banana'

print(my_str.find('a'))
print(my_str.find('z'))

print(my_str.index('a'))
#print(my_str.index('z'))

string1 = 'Hello'
string2 = '12a3'

print(string1.isalpha())
print(string2.isalpha())


string3 = 'HELLO'
string4 = 'hello'
print(string3.isupper())
print(string4.isupper())
print(string3.islower())
print(string4.islower())

text1 = 'Hello, world!'
new_text1 = text1.replace('world', 'Python')
print(new_text1)


text2 = '     Hello, world!    '
new_text2 = text2.strip()
print(new_text2)


text3 = 'Hello, world, python'
new_text3 = text3.split(',')
print(new_text3)


words = ['hello', 'world', 'python']
text4 = ":".join(words)
print(text4)

text5 = 'HellO, woRlD!'

new_text4 = text5.capitalize()
new_text5 = text5.title()
new_text6 = text5.upper()
new_text7 = text5.swapcase()

print(new_text4)
print(new_text5)
print(new_text6)
print(new_text7)


text8 = '    HellO, woRlD!    '

new_text8 = text8.upper().title()
print(new_text8)
