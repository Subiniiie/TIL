my_set1 = {'a', 'b', 'c', 1, 2, 3}
print(my_set1)


my_set1.add(4)
print(my_set1)

my_set1.remove('b')
print(my_set1)

# my_set1.remove(6)
# print(my_set1)

element = my_set1.pop()
print(element)

my_set1.update([1, 4, 5])
print(my_set1)

my_set1.add(1)
print(my_set1)  #중복 허용x


my_set1.discard(4)
print(my_set1)


my_set1.clear()
print(my_set1)



set1 = {0, 1, 2, 3, 4}
set2 = {1, 3, 5, 7, 9}
set3 = {0, 3}

print(set1.difference(set2))
print(set1.intersection(set2))
print(set1.issubset(set2))
print(set1.issuperset(set3))
print(set1.union(set2))



person = {'name': 'Alice',
          'age': 25
          }

person.clear()
print(person)



person = {'name': 'Alice', 'age': 25}

print(person.get('name'))
print(person.get('country'))
print(person.get('country', 'unknown'))
print(person.get('country', '키가 없습니다'))

print(person['name'])
print(person.get('name'))

print(person.keys())
print(person.values())
print(person.items())


print(person.pop('age'))
print(person)

# print(person.pop('country'))
# print(person)

person = {'name': 'Alice',
          'age': 25
          }

print(person.setdefault('country', 'KOREA'))
print(person)


other_person = {
                'name': 'Jane',
                'gender': 'Female'
}

person.update(other_person)
print(person)