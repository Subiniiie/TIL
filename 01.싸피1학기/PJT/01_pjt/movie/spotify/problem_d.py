import json


def max_polularity(artists):
    max = 0
    name = ''
    
    for i in range(len(artists_list)) :
        num = artists_list[i].get('id')
        
        artist_json = open('C:/Users/USER/Desktop/01_pjt/movie/spotify/data/artists/'+str(num)+'.json', encoding = 'utf-8')
        artist_list = json.load(artist_json)
        artist_pop = artist_list.get('popularity')
        if artist_pop > max :
            max = artist_pop
            name = artist_list.get('name')
    return name


# 아래의 코드는 수정하지 않습니다.
if __name__ == "__main__":
    artists_json = open("data/artists.json", encoding="utf-8")
    artists_list = json.load(artists_json)

    print(max_polularity(artists_list))
