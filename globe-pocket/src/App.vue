<template>
  <main id="app">
    <div class="header d-flex">
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
    </div>
    <div class="presentation">
        <div class="carousel">
            <div class="en-tete">
                <p class="title">Suivez vos envies</p>
            </div>
        </div>
    </div>
    <div class="globe">
        <div class="texte">

        </div>
        <div class="img">
            <img class="img-globe" src="/assests/earth.jpg" alt="">
        </div>
    </div>
  </main>
</template>

<script>
// import FooterSite from './components/Footer.vue';
// import HeaderSite from './components/Header.vue';

export default {
//   components: { HeaderSite, FooterSite },

  data(){
    return {

    }
  },
}
</script>

<style scss scoped>

*{
        margin: 0%;
        padding: 0%;
    }
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
    .presentation{
            .carousel-images {
                display: flex;
                position: fixed;
                width: 200%;
                animation: slide 4s infinite alternate ease-in-out;
                z-index: 1;
            }
            .carousel img {
                width: 100%;
                height: auto;
            }
            @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .en-tete{
                position: fixed;
                width: 40%;
                background-color: rgb(158, 158, 158);
                border-radius: 50px;
                margin-top: 20%;
                margin-left: 30%;
                z-index: 10000;
                .title{
                    color: white;
                    font-size: 50px;
                    text-align: center;
                }
            }
        }
</style>
