<template>
<div>

    <h3>Some User Details</h3>
<p>
    {{id}}
    </p>
    <router-link tag="button" :to="'/user/'+ $route.params.id+'/edit">edit</router-link>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            id: this.$route.params.id
        }
    }
}
</script>>