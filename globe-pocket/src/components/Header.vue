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
        name: 'HeaderSite',
        props:{

        },
        data (){
            return {

            }
        }
    }
</script>

<style scss scoped>
    a{
        text-decoration: none;
    }
    .header{
        background-color: #7BB27F;
        width: 100%;
        height: 60px;
        .logo{
            width: 20%;
            .logo-img{
                border-radius: 100%;
                background-color: grey;
                width: 50px;
                height: 50px;
                margin: 5px;
            }
        }
        .navbar{
            margin-left: auto;
            width: 60%;
            .link-header{
                color: black;
                padding-right: 5px;
                margin: 0%;
            }
        }
        .compte{
            width: 15%;
            .compte-img{
                border-radius: 100%;
                background-color: rgb(34, 34, 204);
                width: 50px;
                height: 50px;
                margin: 5px 10px;
                float: right;
            }
        }
    }
</style>