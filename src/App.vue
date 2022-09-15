<template> 
  <NavBar @open = "menuToggle"  :addActive = "addActive" @close = 'close'/>
  <router-view />
  <HomeFooter/>
</template>

<script>

import NavBar from "./components/NavBar.vue"
import  HomeFooter from './components/HomeFooter.vue'
export default {
  
  components:{
    NavBar,
    HomeFooter,
  },
  data(){
  return{
    bool:false,
    addActive:false,
   
  }
 },
 methods:{
  menuToggle(){
    this.bool = !this.bool
    this.addActive = this.bool

  },
  close(){
    this.bool = false
    this.addActive = this.bool
  }
  
 },
}
</script>
<style>
::-webkit-scrollbar{
    width:8px;
    background: #2c3e50;
  }
  ::-webkit-scrollbar-thumb{
    width:7px;
    background: #F1B621;
    border-radius: 4px;
  }
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
 
}
#app {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
