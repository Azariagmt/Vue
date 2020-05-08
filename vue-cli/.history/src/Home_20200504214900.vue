<template>
<app-server-status v-for="serveri n "></app-server-status>
</template>
<style></style>

<script>
import_ServerStatus from './ServerStatus.vue';
export default {
  components:{
    'app-server-status': ServerStatus
  }
};
</script>
