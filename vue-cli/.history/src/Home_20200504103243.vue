<template>
  <p>Server Status : {{ status }}</p>click
  <button @></button>
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
