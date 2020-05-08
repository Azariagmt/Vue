<template>
<>
  <p>Server Status : {{ status }}</p>
  <button @click="changeStatus">
  change
  </button>
</template>
<style></style>
<script>
export default {
  data: function() {
    return {
      status: "critical"
    };
  },
  methods: {
    changeStatus() {
    this.status = 'normal';
    }
  }
};
</script>
