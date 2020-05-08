<template>
    <div class="container">
    <quote-grid></quote-grid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGreid.vue';

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
