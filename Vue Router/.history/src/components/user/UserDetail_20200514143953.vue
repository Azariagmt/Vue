<template>
    <h3>Some User Details</h3>
</template>

<script>
export default {
    data: function(){
        return{
            id: $route.params.id;
        }
    }
}
</script>>