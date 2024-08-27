필요 기술 스택
python
django == 4.2.x
~~bootstrap~~

개발 환경
VSCode

프로젝트 구성
1. 프로젝트 명 -> crud
2. accounts app
기능
- 인증 기능 (회원가입, 로그인 로그아웃)
- 프로필 페이지
- 팔로우 기능
  
3. articles app
- 게시글 CRUD + 작성자 정보
- 좋아요 기능

사용자 요청 경로
1. accounts urls
    -> BASE_URL -> http://localhost/accounts/
    | method | url | view함수 | 기능 |
    |---|---|---|---|
    | 회원 가입 페이지 보여주기 | GET | /signup/ | signup |
    | 회원 정보 생성 | POST | /signup/ | signup |
    | 로그인 페이지 보여주기 | GET | /login/ | login |
    | 로그인 기능 (session 생성) | POST | /login/ | login |
    | 로그아웃 기능 (session 삭제) | POST | /logout/ | logout |
    | 프로필 페이지 | GET | /{str:username}/ | profile (user_name) |
    | 팔로우 기능을 렌더링 할 페이지 | GET | /{str:username}/ | profile (user_name) |
    | 팔로우 기능 | POST | /{int:profile_owner_pk}/ | follow (profile_owner_pk) |


2. articles
    -> BASE_DIR ->  http://localhost/articles/    
    | 기능 | method | url | view함수 | 제약 조건 |
    |---|---|---|---|
    | 메인 페이지 | GET | '' | index | pk 기준 내림차순 정렬 |
    | 게시글 생성 페이지 | GET | /create/ | create | 로그인 필요 |
    | 게시글 생성 기능 | POST | /create/ | create | 로그인 필요 |
    | 개사굴 수정 페이지 | GET | /{ int: article_pk }/update/ | update (article_pk) | 로그인 필요, 작성자인 경우 |
    | 게시글 수정 기능 | POST | /{ int:article_pk }/delete/ | update (article_pk) | 로그인 필요, 작성자인 경우 |
    | 게시글 삭제 기능 | POST | /{ int:article_pk }/delete/ | delete (article_pk) | 로그인 필요, 작성자인 경우 |
    좋아요 버튼을 렌더링할 페이지 | GET | '' | index | 로그인 필요할까?, 작성자가 아닌 경우
    좋아요 기능 | POST | /



  설정
  1. 한글, 한국 시간
  2. base탐플렛 사용
  3. app별 template 폴더 규칙
    - app/templates/app/*.html
    - app/templates/assets/*.css
    - app/templates/images/*.png

