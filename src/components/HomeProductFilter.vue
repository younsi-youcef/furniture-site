<template>
    <div class="big">
        <div class="product">
        <div>
            <img :src="products[id].img" alt="" class="product-img" >
        </div>
        <div class="product-info">
            <h1 class="product-titel"><span>{{products[id].name}}</span> from the {{ products[id].titel}}</h1>
            <p>{{products[id].description}}</p>
            <h1 class="product-price"><span>The price is: </span>{{ products[id].price }}$</h1>
            <button @click="valTrue">Buy it</button>
        </div>
        
    </div>
     <div class="card-container" v-if="val" >
    <img src="../assets/img/arrow-right.svg" alt="" @click="valFalse">
      <div class="card-n-n-p">
    <input type="text" name="" id="" placeholder="Product number">
    <input type="text" name="" id="" placeholder="Pick a color">
    <input type="text" placeholder="Card name">
    <input type="text" name="" id="" placeholder="Card number">
    <input type="password" name="" id="" placeholder="Card password">
    <button class="card-buy-it" >Buy it</button>
  </div>
 </div>
    </div>
</template>

<script>
import homeMx from '../mixins/homeMx.js'
export default{
    props:['id'],
    mixins:[homeMx],
    data(){
        return{
            val:false
        }
    },
    methods:{
        valTrue(){
            this.val= true
        },
        valFalse(){
            this.val = false
        }
    }
   
}
</script>
<style>

</style>

