<template>
  <div class="card card-body">
    <h2>Member Info</h2>
    <div>
      경로 패턴: /members/:id <br />
      요청 경로: {{ route.path }} <br />
      <!-- 
      id 값: {{ route.params.id }}
      라우터 설정에서 :id로 정의한 동적 파라미터의 
      실제 값(예: 1001)을 가져옵니다. 
      -->
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import members from '@members.json';

export default {
  name: 'MemberInfo',
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const member = members.find((m) => m.id === parseInt(id));

    return {
      member,
    };
  },
};
</script>
