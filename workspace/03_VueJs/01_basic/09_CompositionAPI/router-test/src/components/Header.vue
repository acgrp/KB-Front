<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNaiChi)</span>
    <button class="navbar-toggler" type="button" @click="changeNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">홈</router-link>
          <!-- 페이지를 새로고침하지 않고 다른페이지 이동(to : 이동하고 싶은 경로) -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">소개</router-link>
        </li>
        <li class="nav-item">
          <!-- <router-link class="nav-link" to="/members">멤버</router-link> -->
          <router-link class="nav-link" :to="{ name: 'members' }"
            >멤버</router-link
          >
          <!-- 
          :to="{ name: 'members' }"
          -> 라우터 name을 사용하여 경로 지정하기
          -> 경로가 바뀌어도 이름은 그대로이기 때문에 코드 수정 안해도 됨
          -->
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { reactive, computed } from 'vue';

const state = reactive({ isNavShow: false });
// 메뉴가 열렸는지(true) 닫혔는지(false) 상태를 저장합니다.

const navClass = computed(
  () =>
    state.isNavShow
      ? 'collapse navbar-collapse show' // true면 메뉴를 보여주는 클래스 적용
      : 'collapse navbar-collapse', // false면 메뉴를 숨기는 클래스 적용
);

const changeNav = () => {
  state.isNavShow = !state.isNavShow;
  // 버튼을 누를 때마다 상태를 반대로 뒤집습니다 (Toggle).
};
</script>

<style></style>
