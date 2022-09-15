<template>
  <div class="sel"  @click="show">
    <div><h4>All</h4></div>
    <img src="../assets/img/chevron-compact-down.svg" alt="">
  </div>
  <div class="options" >
    <div >
        <h4>Chairs</h4>
    </div>
    <div >
        <h4>Tables</h4>
    </div>
    <div>
        <h4>Wardrobes</h4>
    </div>
    <div >
        <h4>Lamps</h4>
    </div>
    <div @click="filterAll">
        <h4>All</h4>
    </div>
  </div>
    <div class="collection-cart" >
        <template v-if="look && sho === false">
        <div class="pro-cart"  v-for="prof in filter" :key="prof.kr">
            <img :src="prof.img" alt="">
            <div class="titel-and-price">
                <h2>{{ prof.titel}}</h2>
                <h2>{{ prof.price}}</h2>
            </div>
            <div class="pro-description">
                <p>{{ prof.description}}</p>
            </div>
            <div class="pro-btn">
                <router-link :to="{name:'ProductFilter', params: {id:prof.id} }">
                <button class="pro-btn-see" >See more</button>
                </router-link>
                <button class="pro-btn-buy">Buy it</button>
            </div>
        </div>
        </template>
        <template v-else>
        <div class="pro-cart"   v-for="p in product" :key="p.kr">
            <img :src="p.img" alt="">
            <div class="titel-and-price">
                <h2>{{ p.titel}}</h2>
                <h2>{{ p.price}}</h2>
            </div>
            <div class="pro-description">
                <p>{{ p.description}}</p>
            </div>
            <div class="pro-btn">
             <router-link :to="{name:'ProductFilter', params: {id:p.id}  }">
                <button class="pro-btn-see" >See more</button>
                </router-link>

                <button class="pro-btn-buy">Buy it</button>
            </div>
        </div>
        </template>
    </div>
    
        
</template>

<script>
import mx from '../mixins/mx.js'
/* <router-link :to="{name:'ProductFilter', params:{id:product.id} }"><button class="pro-btn-see">See more</button></router-link> */
export default {
  
data(){
    return{
       
        filter:null,
        look : false,
        sho:false
    }
},
mixins:[mx],

methods:{
    show(){
    /*this.$refs.op.classList.toggle('active') */
    
    let options = document.querySelector(".options")
   let option = document.querySelectorAll(".options div")
   let select = document.querySelector(".sel div")
   let sel = document.querySelector('.sel')
   options.classList.toggle("tog")
sel.classList.toggle("rotate")
 
   option.forEach((e)=>{
    e.addEventListener('click',()=>{
         this.look = true
            select.innerHTML = e.innerHTML
         this.filter = this.product.filter((i)=>{
         return i.type == e.querySelector('h4').innerHTML           
})
        sel.classList.remove("rotate")
        options.classList.remove("tog")
         })
   })    
  },
    filterAll(){
        this.sho = true
    }
}
}

</script>

<style>
    .sel{
        width: 400px;
        height: 50px;
        background:#2C3E50;
        border:none;
        border-radius: 5px;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        margin-bottom: 5px;
    }
    .rotate img{
        transform: rotate(180deg);
    }
    .options{
        width: 400px;
        height: auto;
        background:#2C3E50;
        border:none;
        border-radius: 5px;
        color: white;
        display: none;
        transition:display  2s ;
        
    }
.options div{
        width: 400px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
}
.options div:hover{
    background: #3d5166;
}
.options div:first-child{
    border-top-left-radius: 5px;
        border-top-right-radius: 5px;

}
.options div:last-child{
    border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

}
.tog{
    display: block;
}

@media screen and (max-width:420px){
    .sel{
        width: 300px;
        height: 40px;
       
    }
    .options{
        width: 300px;
        height: auto;
        
        
    }
.options div{
        width: 300px;
        height: 40px;
        
}
}

</style>