<template>
    <main class="header d-flex">
        <div class="logo">
            <p class="logo-img" src="" alt=""/>
        </div>
        <div class="navbar d-flex">
            <a class="link-header" href="/main.vue">Accueil</a>
            <p class="link-header">Pays</p>
            <p class="link-header">Activités</p>
            <p class="link-header">Transports</p>
            <p class="link-header">Hébergements</p>
            <p class="link-header">Locations</p>
        </div>
        <div class="compte">
            <p class="compte-img" src="/assests/SiteCSS/user.png" alt=""/>
        </div>
    </main>
</template>

<script>

export default{
    name: 'footer',
    props:{
            
        },
    data (){
        return {
            
        }
    }
}
</script>

<style scss scoped>

</style>