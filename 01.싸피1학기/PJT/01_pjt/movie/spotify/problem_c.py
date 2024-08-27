import json
from pprint import pprint


def artist_info(artists, genres):
    info_list = []
    
    for i in range(len(artists_list)) :
        names = []
        for num in artists_list[i].get('genres_ids') :
            for j in range(len(genres_list)) :
                if num == genres_list[j].get('id') :
                    names.append(genres_list[j].get('name'))
        
        
        info = {'genres_name': names,
                'id': artists_list[i].get('id'),
                'images': artists_list[i].get('images'),
                'name': artists_list[i].get('name'),
                'type': artists_list[i].get('type')
                }
        info_list.append(info)
    return info_list


# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    artists_json = open('data/artists.json', encoding='utf-8')
    artists_list = json.load(artists_json)

    genres_json = open('data/genres.json', encoding='utf-8')
    genres_list = json.load(genres_json)

    pprint(artist_info(artists_list, genres_list))
