import 'bootstrap/dist/css/bootstrap.min.css';
// 부트스트랩 디자인(CSS)을 가져옵니다.

import { createApp } from 'vue';
// createApp함수를 가져옵니다.

import App from './App.vue';
// 메인 틀인 App.vue를 가져옵니다. (router로 만들면 생김)

import router from './router';
// 만든 라우터 설계도를 가져옵니다.

const app = createApp(App);
// App.vue를 가지고 뷰 앱을 만듭니다.

app.use(router);
// 이 앱에서 라우터를 사용하겠다고 선언합니다.

app.mount('#app');
// HTML 파일의 #app 부분에 이 앱을 갖다 붙입니다.
