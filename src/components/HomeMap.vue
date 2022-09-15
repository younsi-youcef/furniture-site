<template>
  <div class="location">
        <h1>Our location</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0465726183374!2d-0.13485074043275735!3d51.51236156136917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876050233854f15%3A0x19973b52d6cd5759!2sLondon%20Furniture%20Store!5e0!3m2!1sfr!2sdz!4v1660574143561!5m2!1sfr!2sdz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.location{
    width:100%;
    height: 570px;
    background: white;
    padding: 10px;
}
.location h1{
    margin: 50px;
}
.location iframe{
    width: 800px;
    height:400px;
    border: none;
    border-radius: 20px; 
    box-shadow: 1px 2px 15px 7px rgba(0, 0, 0, 0.25);
}
@media  screen and (max-width:840px) {
    .location{
    width:100%;
    height: 500px;
    
}

    .location iframe{
    width: 700px;
    height:350px;
}
}
@media  screen and (max-width:730px) {
.location{
    width:100%;
    height: 400px;
    
}
    .location iframe{
    width: 500px;
    height:250px;
}
}
@media  screen and (max-width:530px) {
.location{
    width:100%;
    height:350px;
    
}
    .location iframe{
    width: 300px;
    height:200px;
}
}

</style>