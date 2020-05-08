<template>
    <div class="container">
    <qu>
    </div>
</template>

<script>
import QuoteGrid from './QuoteGreid.vue';

    export default {
        data: function(){
            return{
                quotes: ['Just a quote to see something'],
                maxQuotes: 10
            }
        },
        components:{
            QuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
