password = "In the bustling city, where life is a constant race against time, uoy often find yourself wondering if there's a shortcut to success. The vibrant lights of the cityscape illuminate the night, casting shadows on the short-lived dreams of those who seek fortune. As you navigate through the crowded streets, you realize the deen for guidance, like a compass pointing python. You need direction in this chaotic journey called life."

first_word = password[28:36]  #28번째부터 35번째까지 단어
second_word = password[113:118]  #113번째부터 119번째까지 단어
third_word = password[68:65:-1]   #65번째부터 67번째까지 단어를 역순으로
forth_word = password[326:321:-1]   #321번째부터 325번째까지 단어를 역순으로
fifth_word = password[365:371]   #365번째부터 6개의 단어

print(f'{first_word}{second_word}. {third_word}{forth_word} {fifth_word}.')