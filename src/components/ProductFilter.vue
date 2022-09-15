<template>
    <div class="big">
        <div class="product" >
        <div>
            <img :src="product[id].img" alt="" class="product-img" >
        </div>
        <div class="product-info">
            <h1 class="product-titel"><span>{{product[id].name}}</span> from the {{ product[id].titel}}</h1>
            <p>{{product[id].description}}</p>
            <h1 class="product-price"><span>The price is: </span>{{ product[id].price }}$</h1>
            <button @click="valueTrue">Buy it</button>
        </div>
    </div>
    
  
 <div class="card-container" v-if="value" >
    <img src="../assets/img/arrow-right.svg" alt="" @click="valueFalse">
      <div class="card-n-n-p">
    <input type="text" name="" id="" placeholder="Product number">
    <input type="text" name="" id="" placeholder="Pick a color">
    <input type="text" placeholder="Card name">
    <input type="text" name="" id="" placeholder="Card number">
    <input type="password" name="" id="" placeholder="Card password">
    <button class="card-buy-it">Buy it</button>
  </div>
 </div>
    </div>

</template>

<script>

import mx from '../mixins/mx.js'

export default{
    props:['id'],
    mixins:[mx],
    data(){
        return{
            value:false
        }
    },
    methods:{
        valueTrue(){
            this.value = true
        },
        valueFalse(){
            this.value = false
        }
    }
    
   
}
</script>

<style>
.big{
    width:100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative
}
.product{
    width:100%;
    height:auto;
    margin-top:70px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-info{
    width:600px;
    height:500px;
    background:white;
    text-align: left;
    padding-left:40px;
    padding-bottom:20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.product-info .product-titel{
    font-size: 40px;
}
.product-info .product-titel span{
    color:#F1B621;
}
.product-info .product-price span{
    font-size: 40px;
    color:#19A69D;
}
.product-info button{
        height: 60px;
        width:125px;
        border-radius: 10px;
        color:white;
        margin:5px;
        border: none;
        font-size: 22px;
        background: #19A69D;
}
.product-img{
    width:350px;
    height:450px;
 
    border:none;
    border-radius: 20px;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    margin:20px
    
}

/* buy card */
.card-container{
    width: 700px;
    height: 470px;
    display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    margin-top: 80px;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
        position:fixed;
        background: white;
}
.card-container img{
    transform:rotate(180deg);
    width: 35px;
    height:35px;
    margin-left:20px;
    margin-top:30px
}
.card-n-n-p{
     width: 100%;
    height:400px;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
}
.card-n-n-p input{
    width: 300px;
    height: 40px;
   
}
.card-buy-it{
     
        height: 50px;
        width:120px;
        border-radius: 10px;
        color:white;
        margin:5px;
        border: none;
        font-size: 18px;
        background-color:#19A69D;
}
@media screen and (max-width:870px) {
    .product{
    width:100%;
    height:auto;
    margin-top:70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.product-info{
    width:100%;
    height:500px;
    background:white;
    text-align: left;
    padding-left:40px;
    padding-bottom:20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    .product-img{
    width:80%;
    height:450px;
    border:none;
    border-radius: 20px;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    margin:20px
    
}
.card-container{
    width: 480px;
    height: 450px;
      margin-top: 0px;
      position:fixed;
      inset: 0;
      margin:auto;
      

}
}
@media screen and (max-width:500px) {
 
    .product-img{
    width:80%;
    height:300px;
    border:none;
    border-radius: 20px;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    margin:20px
    
}

.card-container{
    width: 300px;
    height: 450px;
      
      

}

.card-n-n-p input{
    width: 270px;
    height: 40px;
   
}
}
</style>