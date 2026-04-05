<template>
  <div>
    <h2>관심있는 가수?</h2>
    <hr />
    <ul>
      <!-- 반복문, 키, 이름 , 체크여부를 반복해서 뽑아옴 -->
      <CheckboxItem v-for = "idol in idols" :key="idol.id" :name='idol.name' :checked="idol.checked" />
    </ul>
  </div>
</template>


<script>
import CheckboxItem from "./components/CheckboxItem1-2.vue";

export default {
  name: "App",
  // 도구함
  components: { CheckboxItem },

  // 자식에게 줄 데이터
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "EXO", checked: false },
        { id: 4, name: "ITZY", checked: false }
      ]
    };
  }
};
</script>