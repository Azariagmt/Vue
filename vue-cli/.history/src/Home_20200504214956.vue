<template>
<div>
<app-server-status v-for="server in 5">

</app-server-status>
</div>
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
