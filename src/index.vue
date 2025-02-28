<template>
    <v-main class="all">
        <template>
            <header class="header">
                <div class="logo">Logo</div>
                <div class="navbar d-flex">
                    <a class="link-header" href="./index.html">Accueil</a>
                    <p class="link-header">Pays</p>
                    <p class="link-header">Activités</p>
                    <p class="link-header">Transports</p>
                    <p class="link-header">Hébergements</p>
                    <p class="link-header">Locations</p>
                </div>
            </header>
        </template>
    </v-main>
</template>

<script>
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
createApp(index).mount('#index');
    export default{
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
    .header{
        background-color: #7BB27F;
        width: 100%;
        height: 50px;
        .logo{
            border-radius: 100%;
            background-color: grey;
            width: 50px;
        }
        .navbar{
            display: flex;
            align-items: center;
            justify-content: center;
            .link-header{
                gap: 10px;
                color: black;
            }
        }
    }
</style>