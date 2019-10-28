# Web App ManiFest

- Install Banner & App Icon
- Progressive Web App의 설치와 앱 구성정보를 닫고 있는 json 형식의 설정파일
  > 앱 아이콘, 화면 런쳐 방식 및 배경색, 시작페이지 등을 설정할 수 있는 json 파일

### 앱 관련 구성정보

- Start URL : 웹 앱이 시작되는 지점
- Launch Image : 웹 앱 시작화면
- Display Type : 웹 앱의 화면 형태
- Display Orientation : 웹 앱 화면 방향
- App Icon : 앱 아이콘 이미지와 크기

```json
{
  "short_name": "앱 아이콘 이름",
  "name": "하단 설치 배너에 표기될 이름 & 앱에서 검색시 키워드",
  "icons": [
    "src": "dist/images/icons/icon-32*32.png",
    "type": "image/png",
    "sizes": "32*32"
  ],
  "background_color": "#1E88E5",
  "display": "standalone",
  "start_url": "./"
}
```

1. 1.

### 3. Start URL

- 앱이 시작될 때 로딩될 페이지 위치 지정
  > "start_url": "./"
- GA 분석이나 기타 목적으로 query string 을 뒤에 붙일 수 있다.
  > "start_url": "index.html?launcher=homescreen"

### 4. Display Type

- 웹앱 화면의 전체적인 모양을 정할 수 있다.
- 웹앱이 모바일 앱의 느낌을 가졀 수 있도록 결정짓는 속성
- **"display": "standalone"**
  - standalone: 상단 URL바 제거하여 네이티브 앱 느낌을 제공
  - browser : 해당 OS 브라우저에서 웹앱 실행
  - fullscreen : 크롬이 아닌 기타 브라우저에서 네이티브 앱 느낌 제공
  - minumul-ui : fullscreen과 비슷하나 네비케이션 관련 최소 UI를 제공
- **주의사항**: iOS에서 standalone 사용시
- `<a>` 를 이용한 네비게이션 이동 시 새 브라우저 열기로 인해 context를 잃게 됨
- 따라서, location.href 또는 SPA를 이용한 네비케이팅으로 전체 UX를 가져갈 필요가 있음
  > <meta name="apple-mobile-web-app-capable" content="yes">
