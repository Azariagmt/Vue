<template>
<div>
    <h1>The User Page</h1>
   
    <button @click="navigateHome" class="btn btn-secondary"> Go ot home</button>
    <hr>
    router-view
</div>
</template>
<script>
export default {

    methods:{
        navigateHome: function(){
            this.$router.push('/');
        }
    }
}
</script>