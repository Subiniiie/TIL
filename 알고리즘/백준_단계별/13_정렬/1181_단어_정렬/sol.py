import sys
N = int(sys.stdin.readline())
dict = {}
lst = []

# alphabet = {'a':0, 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6,
#         'h':7, 'i':8, 'j':9, 'k':10, 'l':11, 'm':12, 'n':13,
#         'o':14, 'p':15, 'q':16, 'r':17, 's':18, 't':19, 'u':20,
#         'v':21, 'w':22, 'x':23, 'y':24, 'z':25}

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
         'h', 'i', 'j', 'k', 'l', 'm', 'n',
         'o', 'p', 'q', 'r', 's', 't', 'u',
         'v', 'w', 'x', 'y', 'z']
for _ in range(N) :
    word = sys.stdin.readline().rstrip()
    if len(word) in dict :
        if word in dict[len(word)] :
            pass
        else :
            dict[len(word)].append(word)
    else :
        dict[len(word)] = [word]
        lst.append(len(word))

lst.sort()

for num in lst :
    if len(dict[num]) == 1 :
        print(dict[num][0])
    else :
        total_cnt = 0
        for alpha in alphabet :
            for l in range(1, num):
                alpha_cnt = 0
                temp_words = []
                for word in dict[num] :
                    if word[l] == alpha :
                        alpha_cnt += 1
                        temp_words.append(word)
                if alpha_cnt == 1 :
                    print(temp_words[0])
                else :


