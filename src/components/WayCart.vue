<template>
 <div class="container">
    <div class="way-cart" v-for="arr in arrs"  :key="arr.id"> 
        <img v-bind:src="arr.img" alt="">
        <h2>{{ arr.h2 }}</h2>
    </div>
 </div>
</template>

<script>
export default {
    data(){
        return{
            arrs:[
                {img: require('../assets/img/undraw_searching_re_3ra9.svg'), h2: "Search for the furniture that you want " , id:1},
                {img: require('../assets/img/click.svg'), h2: "Click the buy it button  " , id: 2},
                {img: require('../assets/img/undraw_online_payments_re_y8f2.svg'), h2: "Pay with the way that you prefer " , id:3},
            ],
            
        }
    }
}
</script>

<style>
.container{
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.way-cart{
    width: 250px;
    height: 300px;
    background: white;
    padding: 10px;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    margin: 50px;
}
.way-cart img{
    width:150px;
    height: 200px;
}


</style>