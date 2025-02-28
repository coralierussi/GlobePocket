<template>
    <v-main class="all">
        <template>
            <div class="navbar d-flex">
            <a class="link-header" href="./index.html">Accueil</a>
            <p class="link-header">Pays</p>
            <p class="link-header">Activités</p>
            <p class="link-header">Transports</p>
            <p class="link-header">Hébergements</p>
            <p class="link-header">Locations</p>
        </div>
        </template>
    </v-main>
</template>

<script>
//import Header from './components/Header.vue';
//import Footer from './components/Footer.vue';
//import Contact from './components/Contact.vue';
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