# WEB_Practice
웹페이지 만들기를 위한 레포지토리

개발 환경
1. goorm.io (구름 IDE)의 Student 구독환경
2. Ubuntu 18.04 LTS

웹사이트 실행 방법(리눅스 환경 기준)
1. git clone을 이용하여 frontend 폴더를 내려받는다.
2. frontend 폴더로 들어가서 nodejs를 설치한다(npm install / yarn install 사용)
3. npm run serve 를 이용해 웹사이트를 포트에 올린다.(안되면 npm을 설치하면 된다.)
4. 해당 포트에 들어가서 사이트를 확인한다.

찾아볼만한 사이트
1. https://kdydesign.github.io/2019/04/22/vue-cli3-tutorial/
VUE설치부터 옵션 설치까지 자세하게 안내되어 있다.
2. https://bootstrap-vue.org/
VUE bootstrap 사이트. 원하는 디자인을 적용할 수 있다.
3. https://medium.com/hivelab-dev/vue-express-mysql-part1-98f68408d444
기본적인 express설치법, 활용법을 알 수 있다.

문제점 해결
1. goorm으로 들어갔는데 invalid host Error가 떠요 ㅜㅜ
https://goseungduk.tistory.com/50
위 사이트 참고하면 된다.
vue.config.js 파일을 만들고(있다면 그 안에)
module.exports = {
 devServer: {
  disableHostCheck: true
 }
}
를 추가해주면 된다.
2. nodejs가 필요하대요 ㅜㅜ
npm install로 node js를 설치해주자.
3. 갑자기 페이지가 안떠요 ㅜㅜ
내용물을 뭔가 잘못 건드린거다. 롤백하자.
4. mongoDB가 설치가 안돼요 ㅜㅜ
죄송하지만 저도 왠지 설치가 안됩니다. 해결되면 말씀드리겠습니다.
