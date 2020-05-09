<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template>
xt
<script>
    export default {
        data: function(){
            return {
                text:'Hello world'
            }
        },
        filters: {
            toUpperCase: function(value){
                return value.toUpperCase()
            }
        }
    }
</script>

<style>

</style>
