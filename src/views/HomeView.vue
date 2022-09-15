<template>
  <div class="head" >
  <div class="back" ></div>
  <div class="filter"   >
    <h1>We offre you the latest trends in home <br>
     <span>furniture</span>
     with international <span>quality</span><br>
     and competitive <span>prices</span></h1>
  </div>
</div>
<way-cart/>
<FrCollection/>
<SweatCom/>
<HomeMap/>


</template>

<script>
import WayCart from '../components/WayCart.vue'
import FrCollection from '../components/FrCollection.vue'
import SweatCom from '../components/SweatCom.vue'
import HomeMap from '../components/HomeMap.vue'


export default {
    name: 'HomeView',
    components : {
      WayCart,
      FrCollection,
      SweatCom,
      HomeMap,
      
    },
    

  
}
</script>
<style>
.head{
  height: 700px;
  box-sizing: border-box;
  position: relative;
}
.back{
  box-sizing: border-box;
  width:100% ;
  height: 700px;
  background: url(../assets/img/toa-heftiba-FV3GConVSss-unsplash.jpg);
  background-size:cover;
  position: relative;  
  bottom: 70px;
  
}
.filter{
  position: absolute;
  width: 100%;
  height: 700px;
  left: 0px;
  top: 0;
  z-index: 88;
  background: rgba(0, 0, 0, 0.43);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.filter h1{
  font-size: 50px;
  color:white;
}
.filter h1 span{
  color:#F1B621;
}

</style>
