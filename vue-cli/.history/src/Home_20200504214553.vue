<template>
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
        this.status = !this.status;
    }
  }
};
</script>
