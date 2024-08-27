import json


def dec_artists(artists):
    result = []
    for i in range(len(artists_list)) :
        num = artists_list[i].get('id')
        
        info_json = open('C:/Users/USER/Desktop/01_pjt/movie/spotify/data/artists/'+str(num)+'.json')
        info_list = json.load(info_json)
        
        if info_list.get('followers').get('total') >= 10000000 :
            result.append({'name': info_list.get('name'),
                           'uri-id': info_list.get('uri').split(':')[2]})
            
    return result


# 아래의 코드는 수정하지 않습니다.
if __name__ == '__main__':
    artists_json = open('data/artists.json', encoding='utf-8')
    artists_list = json.load(artists_json)

    print(dec_artists(artists_list))
