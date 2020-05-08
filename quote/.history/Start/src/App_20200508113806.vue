<template>
    <div class="container">
    <app-quote-grid :quotes></app-quote-grid>
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
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
