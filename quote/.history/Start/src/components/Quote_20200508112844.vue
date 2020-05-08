<template>
<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
        
    </div>
</div>
</template>

<script>
export default {
    props: ['quotes']
}
</script>

<style>
        .panel-body{
            font-family: 'Arizonia', cursive;
            font-size: 24px;
            color: darkkhaki;
        }
        .quote{
            cursor:pointer;
        }
        .quote:hover{
            background-color: aqua;
        }
</style>>