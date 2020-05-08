<template>
  <p>Server Status : {{ status }}</p>
  bundleRenderer.renderToString
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
