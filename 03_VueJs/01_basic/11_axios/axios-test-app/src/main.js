import { createApp } from 'vue';

// import App from './App.vue' /* 프록시 서버 */
<<<<<<< HEAD
import App from './App1.vue';
=======
// import App from './App1.vue'; /* Promise */
// import App from './App2.vue'; /* async await */
// import App from './App3.vue'; /* 반복문 */
// import App from './App4.vue'; /* POST */
// import App from './App5.vue'; /* then, catch */
import App from './App6.vue'; /* async await,  */
>>>>>>> 35bbf7a35a7366f17dd8f7b0bfddc28d439781d3
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
