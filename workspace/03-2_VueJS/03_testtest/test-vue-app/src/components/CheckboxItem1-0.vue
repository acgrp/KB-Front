<template>
  <div>
    <li><input type="checkbox" v-model="checked">옵션1</li>
  </div>
</template>

<script>
export default {
  // 이 파일을 불러올려면 CheckboxItem이 이름
  name: "CheckboxItem",

  // checked 의 기본값은 false라는 뜻
  data() {
    return {
      checked: false,
    };
  },
};

// import { createApp } from 'vue'
// import App from './App1-0.vue'
// import CheckboxItem from  './components/CheckboxItem1-0.vue'


// createApp(App)
// .component('CheckboxItem', CheckboxItem)
// .mount('#app')


</script>
