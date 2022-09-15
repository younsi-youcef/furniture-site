<template>
  <nav>
    
    <div class="logo-div">
      <p class="logo">Furn<span>iture</span></p>
    </div>

    <div class="links" :class="{active : addActive}">
      <h1 class="mn" @click="closeMenu"><img src="../assets/img/x.svg" alt=""> <span>Close</span> </h1>
      <router-link to="/" class="link">
    <img src="../assets/img/house-fill.svg" alt="">
    <h1>Home</h1>
    </router-link> 
    <router-link to="/about" class="link">
      <img src="../assets/img/justify.svg" alt="">
      <h1>About</h1>
    </router-link>
    <router-link to="/products" class="link">
      <img src="../assets/img/cart-fill.svg" alt="">
      <h1>Products</h1>
    </router-link>
    <router-link to="/special" class="link">
      <img src="../assets/img/clipboard2-check-fill.svg" alt="">
      <h1>Special order</h1>
    </router-link>
    <router-link to="/search" class="link link-show-two">
        <img src="../assets/img/search.svg" alt="">
        <h1>Search</h1>
      </router-link> 
      
    </div>

    <div class="alone">
      <router-link to="/search" class="link link-show">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
        <h1>Search</h1>
      </router-link> 

      
    </div>

    <div class="menu">
        <img src="../assets/img/bars-solid.svg" alt="" @click="openMenu">
    </div>
    
  </nav>
</template>

<script>
export default {
    props:["addActive"],
methods:{
    openMenu(){
      this.$emit('open')
    },
    closeMenu(){
      this.$emit('close')
    }
    }
}
</script>

<style>
nav {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 99;
  background: rgba(0, 0, 0, 0.43);
  backdrop-filter: blur(6px);
}
.links{
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.menu {
  display: none;
}

nav a {
  font-weight: bold;
  color: white;
}
.alone{
  width: 100px;
  height: 50px;
  box-sizing: border-box;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.logo{
  text-decoration: none;
  font-size: 40px;
  color: white;
  box-sizing: border-box;
  margin-right: 100px;
  font-weight: 700;
}
.logo span{
  color: #F1B621;
}


.toggle{
  width: 50px;
  height: 30px;
  background: white;
  border-radius: 35px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.mn{
  display: none;

}

.link {
  display: flex;
  flex-direction: row;
  text-decoration: none;
}
.link img{
  display: none;
}
.link-show svg{
  display: block;
  width: 30px;
  height:30px;
  fill:white;
}
.link-show h1{
  display: none;
}
.link-show-two{
  display: none;
}
nav a.router-link-exact-active {
  color: #F1B621;
}
nav .alone a.router-link-exact-active svg{
  fill: #F1B621;
}


@media screen and (max-width: 850px) and (min-width:1px){
  .links{
    box-sizing: border-box;
    width: 250px;
    height: 1000px;
    background: white;
    position: absolute;
    top: 0;
    right: -350px;
    transition: right 0.7s ease-out;
    order: 4;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding-left: 30px;
    box-shadow: 2px 4px 30px 15px rgba(0, 0, 0, 0.25);
}
.link {
  display: flex;
  flex-direction: row;
  color: #2c3e50;
  margin-bottom: 20px;
  
}
.link img{
  display: block;
  width: 30px;
  margin-right: 20px;
  
}
.link-show-two h1{
  display: block;
}
.mn{
    display: flex;
    font-size: 40px;
    color:#19A69D;
    cursor: pointer;
    
}
.mn img{
  width:50px;
  position:relative;
  right: 10px;
}
.link-show svg{
  display: none
}
.menu{
  display: block;
  width: 100px;
  
}
.menu img{
  width: 30px;
  cursor: pointer;
  
}
.active{
  right: 0;
  transition: right 0.9s ease-out;
}

}
</style>