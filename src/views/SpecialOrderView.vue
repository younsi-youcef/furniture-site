<template>
     <div class="big-spicial">
      <div class="spicial-order-container" >
      
      <div class="spicial-order-card">
        <input type="text" placeholder="Type">
    <input type="text" name="" id="" placeholder="Product number">
    <input type="text" name="" id="" placeholder="Pick a color">
    <input type="text" name="" id="" placeholder="Your number">
    <input type="email" name="" id="" placeholder="Your email">
    <button class="send-it">send</button>
  </div>
 </div>
     </div>

</template>

<script>

</script>

<style>
.big-spicial{
  margin-top:80px;
   width:100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.spicial-order-container{
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    background: white;
   
}

.spicial-order-card{
     width: 100%;
    height:400px;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
}
.spicial-order-card input{
    width: 300px;
    height: 40px;
   
}
.send-it{
     
        height: 50px;
        width:120px;
        border-radius: 10px;
        color:white;
        margin:5px;
        border: none;
        font-size: 18px;
        background-color:#19A69D;
}
@media screen and (max-width:800px) {
  .spicial-order-container{
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    background: white;
   
}

.big-spicial{
  margin-top:100px;
   
}
.spicial-order-card input{
    width: 300px;
    height: 40px;
   
}
}
@media screen and (max-width:550px) {
  .spicial-order-container{
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    background: white;
   
}

.big-spicial{
  margin-top:100px;
   
}
.spicial-order-card input{
    width: 290px;
    height: 40px;
   
}
}
@media screen and (max-width:400px) {
  .spicial-order-container{
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
    background: white;
   
}

.big-spicial{
  margin-top:100px;
   
}
.spicial-order-card input{
    width: 270px;
    height: 40px;
   
}
}
</style>