<template>
    <v-main class="all">
        <Header></Header>
        <Footer>
            <Contact></Contact>
        </Footer>
    </v-main>
</template>

<script>
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
createApp(index).mount('#index');
    export default{
        name:'Index',
        data(){
            return {

            }
        }
    }
</script>

<style scss scoped>
    *{
        margin: 0%;
        padding: 0%;
    }
</style>