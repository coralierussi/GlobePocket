<template>
    <div class="head">
        <div class="carousel">
            <!-- <div class="carousel-image"> -->
                <img class="carousel-images" src="/assests/voyage-2.png" alt="Image 2">
                <img src="/assets/voyage-1.png" alt="Image 1">
             <!--</div>-->
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
</template>

<script>

export default{
    data (){
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
    .head{
        /*.carousel{
            width: 400px;
            height: 250px;
            overflow: hidden;
            position: relative;*/
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