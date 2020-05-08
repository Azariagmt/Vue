<template>
<p>
Server Status : {{status}}
</p>
</template>
<style>
</style>
<script>
export default{
    data: function(){
    return{
        status : 'critical'
    }
    }, 
    methods: {
        changeStatus
    },
}
</script>