<template>
  <div class="home-footer">
    <h1 class="footer-logo">Furn<span>iture</span></h1>

    <div class="quick-lines">
      <h2>Quick lines</h2>
    <router-link to="/" class="footer-link">
    <h1>Home</h1>
    </router-link>
    
    <router-link to="/about" class="footer-link">
      <h1>About</h1>
    </router-link>

    <router-link to="/products" class="footer-link">
      <h1>Products</h1>
    </router-link>

    <router-link to="/special" class="footer-link">
      <h1>Special order</h1>
    </router-link>
    
    </div>
    <div class="home-contact">
        <h2>Contact us</h2>
        <div class="home-info">
            <h1>+210 457 927</h1>
            <h1>furniture@gmail.com</h1>
            <h1>566 london street</h1>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-footer{
  width:100%;
  height: 400px;
  background:#2C3E50;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
 
}
.footer-logo{
  text-decoration: none;
  font-size: 50px;
  color: white;
  box-sizing: border-box;
  margin-right: 100px;
  font-weight: 700;
}
.footer-logo span{
  color:#F1B621;
}
.quick-lines{
  width:300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}
.quick-lines h2{
  font-size: 35px;
  color:#F1B621;
}
.footer-link {
  text-decoration: none;
  color: white;
  font-size: 15px;
}
.home-contact{
  width:300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.home-contact h2{
  font-size: 35px;
  color:#F1B621;
}
.home-contact h1{
   text-decoration: none;
  color: white;
  font-size: 30px;
}
@media screen and (max-width:850px) {

  .home-footer{
  width:100%;
  height: 850px;
  background:#2C3E50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.footer-logo{
  text-decoration: none;
  font-size: 50px;
  color: white;
  box-sizing: border-box;
  margin-left: 80px;
  font-weight: 700;
}
.footer-logo span{
  color:#F1B621;
}
.quick-lines{
  width:300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.quick-lines h2{
  font-size: 35px;
  color:#F1B621;
}
.footer-link {
  text-decoration: none;
  color: white;
  font-size: 15px;
}
.home-contact{
  width:300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-contact h2{
  font-size: 35px;
  color:#F1B621;
}
.home-contact h1{
   text-decoration: none;
  color: white;
  font-size: 30px;
}
}
</style>