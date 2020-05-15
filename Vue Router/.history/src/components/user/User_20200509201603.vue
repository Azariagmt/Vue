<template>
<div>
    <h1>The User Page</h1>

    <button @click="navigateHome"> Go ot home</button>
</div>
</template>

<script>
export default {
    methods:{
        navigateHome: function(){
            this.$router
        }
    }
}
</script>