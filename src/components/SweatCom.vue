<template>
  <div class="box">
    <div class="box-img">
        <img src="../assets/img/chair.jpg" alt="">
    </div>
    <div class="box-paragraph">
        <h1>We also offer the service of selling chairs,tables,lamps.... <span>according to your request</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae interdum vel pellentesque lectus egestas mus varius. Donec iaculis lectus tellus pulvinar dui. Id semper arcu, netus euismod velit turpis. Facilisis neque at lacus cras sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae interdum vel pellentesque lectus egestas mus varius. Donec iaculis lectus tellus pulvinar dui. Id semper arcu, netus euismod velit turpis. Facilisis neque at lacus cras sollicitudin
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae interdum vel pellentesque lectus egestas mus varius. Donec iaculis lectus tellus pulvinar dui. Id semper arcu, netus euismod velit turpis. Facilisis neque at lacus cras sollicitudin

        </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background:#2C3E50;

}
.box-img{
    width:600px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.box-img img{
    width: 450px;
    height: 450px;
    border-radius: 20px;
    
}
.box-paragraph{
    width: 600px;
    height: 500px;
    padding: 10px;

}
.box-paragraph h1{
    color:white;
    text-align: left;
    font-size: 40px;
}
.box-paragraph h1 span{
    color:#F1B621;
    
}
.box-paragraph p{
    color:white;
    text-align: left;
    margin-left:15px;
        font-size: 20px;

}
@media screen and (max-width: 600px) and (min-width: 1px){
    .box-img{
    width:350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
    .box-img img{
        width: 300px;
        height: 300px;

}
.box-paragraph{
    width: 100%;
    height: auto;
    padding: 20px;
    
    
}
.box-paragraph h1{
    font-size: 25px;
        text-align: center;

}
}

</style>