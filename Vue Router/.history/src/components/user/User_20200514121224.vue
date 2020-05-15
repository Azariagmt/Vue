<template>
<div>
    <h1>The User Page</h1>
    <p>
        Loaded id: {{id}}
    </p>
    <button @click="navigateHome" class="btn btn-secondary"> Go ot home</button>
</div>
</template>
<script>
export default {
    data: function(){
        return{
            id: this.$route.params.id
        }
    },
    watch:{
        '$route'()
    },
    methods:{
        navigateHome: function(){
            this.$router.push('/');
        }
    }
}
</script>