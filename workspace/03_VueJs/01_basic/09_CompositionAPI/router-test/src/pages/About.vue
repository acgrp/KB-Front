<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ currentPath }}</p>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';

export default {
  name: 'About',
  setup() {
    const route = useRoute();

    const currentPath = route.path;
    // route.path는 주소    

    console.log(route);

    return { route, currentPath };
  }
}
</script>

<!-- script setup -->
<!-- <script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const currentPath = route.path;
// route.path는 주소

console.log(route);

</script> -->s