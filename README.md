three.js

WebGL <- GPU 이용.. 성능 좋다.. 개발 어렵고 까다로움

three.js는 WebGL 쉽고 간편하게 사용할 수 있게 해주는 라이브러리

현 시점 three.js가 가장 인기

<br />

---

<br />

VSCode 라이브서버 설치 + 크롬

<br />

---

<br />

threejs.org에서 다운로드

build 폴더에 3개의 파일이 있는데, three.js 와 three.min.js(압축버전) 은 html에 src 속성 경로 넣어서 쓸 때,

모듈 방식은 three.module.js

<br />

three.js 로 실습

<br />

---

<br />

모듈 장점: main되는 파일 하나만 html에 연결하면 됨

<br />

three.js에서 권장하는 방식: 모듈 방식

<br />

---

<br />

웹팩(Webpack)

번들링: 자바스크립트, 이미지, css 파일 등을 하나하나의 모듈로 보고 배포용으로 병합, 포장하는 것

번들러: 번들링 작업을 수행하는 툴들(ex. 웹팩)

<br />

웹팩 <- 개발에 필요한 것. 그래서 -D 옵션으로 설치

<br />

`npm run build` 한 후 dist 폴더에서 index.html 라이브서버 켜보기

<br />

---

<br />

Scene(장면/무대)

Mesh 메쉬 = Geometry 모양 + Material 재질

Camera 카메라 <- Field of view 시야각을 갖는다

Light 빛

화면에 그려주는 것: Renderer 렌더러

<br />

정면 앞 방향 : Z 축 + 방향

좌우: X 축(왼쪽 -, 오른쪽 +)

위 아래: Y축(위 +, 아래 -)

<br />

---

<br />
