<template>
<div>
<p>
    <h3>Some User Details</h3>

</p>
</div>
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