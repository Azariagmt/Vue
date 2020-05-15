<template>
<div>
    <h1>The User Page</h1>
    <button @click="navigateHome" class="btn btn-secondary"> Go ot home</button>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            id: this.$route.params
        }
    },
    methods:{
        navigateHome: function(){
            this.$router.push('/');
        }
    }
}
</script>