<template>
    <div class="container">
    <quote-rid>
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
            quoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
