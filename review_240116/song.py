#딕셔너리

songs = {'아이유': '블루밍', 
         '조유리': '러브쉿', 
         '아이브': '러브다이브', 
         '트와이스': 'dance the night away',
         '태연': 'rain',
         '소향': '나 안젠간 떠날거야'}

print(songs)
print(songs['조유리']) 
print(songs['아이브'], songs['소향'])
print(songs['태연']*4)
print(songs.items())
print(songs.values())   #value 값만 추출
print(list(songs.values()))   #value 값을 리스트로

a = sorted(songs.items(), key = lambda x : x[1])  #내림차순 정렬, value 기준
print(a)

b = sorted(songs.items(), key = lambda x : x[1], reverse = True)   #올림차순 정렬, value 기준
print(b)

c = sorted(songs.items(), key = lambda x : x[0])   #내림차순 정렬, key 기준
print(c)

d = sorted(songs.items(), key = lambda x : x[0], reverse = True)   #올림차순 정렬, key 기준
print(d)