<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <!-- 페이지 이동시 해당 페이지(주소)의 화면을 출력해주는 곳 -->
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
// Header 부품을 가져와서 사용할 준비를 합니다.
</script>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
… .fa {
  padding: 5px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>
