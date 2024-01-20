import json
from pprint import pprint


def artist_info(artist, genres):
    genres_names = []
    
    for num in artist_dict.get('genres_ids') :
        for i in range(len(genres_list)) :
            if genres_list[i].get('id') == num :
                genres_names.append(genres_list[i].get('name'))
    info = {'genres_names': genres_names,
            'id': artist_dict.get('id'),
            'images': artist_dict.get('images'),
            'name': artist_dict.get('name'),
            'type': artist_dict.get('type')
            }
    return info


# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    artist_json = open('data/artist.json', encoding='utf-8')
    artist_dict = json.load(artist_json)

    genres_json = open('data/genres.json', encoding='utf-8')
    genres_list = json.load(genres_json)

    pprint(artist_info(artist_dict, genres_list))
