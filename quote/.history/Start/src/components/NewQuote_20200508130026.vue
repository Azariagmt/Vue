<template>
<div class="row">
<app-quote v-for="quote in quotes">{{quote}}</app-quote>
</div>
</template>

<script>
import Quote from './Quote.vue';

export default {
}
</script>

<style scoped>

</style>