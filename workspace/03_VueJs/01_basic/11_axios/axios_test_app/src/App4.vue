<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios'

const requestAPI =async () => {
  let data = { todo: "윗몸일으키기 4세트", desc: "너무 빠르지 않게..." }

  const url = "/api/todos";

  await axios.post(url, data);
  
  axios.get(url).then((res) => {
    console.log("응답", res)
  })
};

requestAPI();

</script>