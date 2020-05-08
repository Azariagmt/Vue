<template>
<div>
  <p>Server Status : {{ status }}</p>
  <button @click="changeStatus">
  change
  </button>
  </div>
</template>
<style></style>
<script>
export default {
  data: function() {
    return {
      status: true
    };
  },
  methods: {
    changeStatus() {
    this.status = ;
    }
  }
};
</script>
