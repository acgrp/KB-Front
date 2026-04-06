<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = "/api/todos";
const todoUrlPrefix = "/api/todos/";
// 특정 데이터 1개를 가져올 때 앞에 붙일 '주소 머리말'입니다. (뒤에 id가 붙을 예정)

//전체 목록을 조회한 후 한 건씩 순차적으로 순회하며 조회하기
const requestAPI = async () => {
  let todoList;
  let response = await axios.get(listUrl);

  todoList = response.data;
  // 응답 객체(response) 중에서 우리가 진짜 필요한 알맹이 데이터(.data)만 뽑아 상자에 담습니다.
  // .data가 뭐야?

  console.log("# TodoList : ", todoList);
  for (let i = 0; i < todoList.length; i++) {

    response = await axios.get(todoUrlPrefix + todoList[i].id);
    // 중요! await이 있으니 1번 데이터를 다 가져올 때까지 2번으로 넘어가지 않습니다.
    
    console.log(`# ${i + 1}번째 Todo : `, response.data);
  }
};
requestAPI();
</script>