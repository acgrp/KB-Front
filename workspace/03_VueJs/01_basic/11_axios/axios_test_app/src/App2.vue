<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios'

const requestAPI = async () => {

  const url = "/api/todos";

  const res = await axios.get(url);

  console.log("출력 ", res);

  for (let i = 0; i < res.data.length; i++) {
    const todoList = await res.data[i];
    console.log(todoList)
  }
};

requestAPI();

</script>