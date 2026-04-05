<template>
<!-- 반복문을 돌려서 name을 주기때문에 idol이 앞에 불필요 -->
<!-- ???그럼 checked는 왜 :checked가 붙은거지? -->
    <li><input type="checkbox" :checked="checked"/>{{name}}</li>
</template>

<script>
export default {
  name: "CheckboxItem",

  // 부모에게서 name, checked를 가져온다는 뜻
  // 부모의 export default에 데이터가 return되어야 함
  props: ['name', 'checked'],
};
</script>
