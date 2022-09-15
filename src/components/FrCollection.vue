<template>
  <div class="collection">
    <h1>Our favorite collection</h1>
    <div class="collection-cart" >
        <div class="pro-cart" v-for="pro in products" :key="pro.kr">
            <img :src="pro.img" alt="">
            <div class="titel-and-price">
                <h2>{{ pro.titel}}</h2>
                <h2>{{ pro.price}}</h2>
            </div>
            <div class="pro-description">
                <p>{{ pro.description}}</p>
            </div>
            <div class="pro-btn">
                 <router-link :to="{name:'HomeProductFilter', params: {id:pro.id} }">
                <button class="pro-btn-see" >See more</button>
                </router-link>
                <button class="pro-btn-buy" >Buy it</button>
            </div>
        </div>
    </div>
    <button class="collection-see-more">See more</button>
  </div>
</template>

<script>
import homeMx from '../mixins/homeMx.js'
export default {
   mixins:[homeMx],
}
</script>

<style>
    .collection{
        width: 100%;
        height: auto;
        padding: 10px;
    }
    .collection h1{
        text-align: left;
        margin: 30px;
    }
    .collection-cart{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        
    }
    .pro-cart{
     width: 300px;
    height: 350px;
    background: white;
    padding: 10px;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    margin: 30px;
    box-sizing: border-box;
    padding: 0;
    border-radius: 20px;
    }
    .pro-cart img{
        width:300px;
        height: 200px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
    .titel-and-price{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        font-size: 15px;
        height: 40px;
        box-sizing:border-box ;
    }
    .pro-description{
        font-size: 13px;
        height: 30px;
        color: #9B9B9B;
        font-weight:600
    }
    .pro-btn{
        height: 70px;
    }
    .pro-btn button{
        height: 50px;
        width:120px;
        border-radius: 10px;
        color:white;
        margin:5px;
        border: none;
        font-size: 18px;
    }
    .pro-btn-see{
        background-color:#19A69D;
        }
        .pro-btn-buy{
        background-color:#F1B621;
        
        }
        .collection-see-more{
            height: 70px;
        width:160px;
        border-radius: 10px;
        color:white;
        margin:30px;
        border: none;
        font-size: 25px;
        background-color:#F1B621;
        }


</style>