<template>
    <div class="container">

        <app-new-qute @quoteAdded="newQuote"></app-new-qute>
    <app-header :quoteCount="quotes.len"></app-header>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
                Info: Click on a quote to delete it
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

    export default {
        data: function(){
            return{
                quotes: ['Just a quote to see something'],
                maxQuotes: 10
            }
        },
        methods:{
            newQuote(quote){
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }
        },
        components:{
            appQuoteGrid: QuoteGrid,
            appNewQute: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
