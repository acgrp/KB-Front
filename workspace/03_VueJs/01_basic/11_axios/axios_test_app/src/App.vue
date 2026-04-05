<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios'

const requestAPI = () => {
  // const url = "http://localhost:3000/todos/1";
  const url = "/api/todos";

  axios.get

    (url).then((response) => {
      console.log("응답: ", response);
      console.log("응답 데이터: ", response.data);

      for (let i = 0; i < response.data.length; i++) {
        console.log("data-list", response.data[i].todo)
      }
      console.log("data-list-1", response.data[1].todo)
    });
};
requestAPI();
</script>