<template>
  <div class="search-input">
    <input type="search" name="" id="" placeholder="Search for product">
    <button>Search</button>
  </div>
</template>

<script>


</script>

<style>
.search-input{
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 80px;
}
.search-input input{
width: 400px;
height: 50px;
border-radius: 10px;
border: solid 1px;
}
.search-input button{
  height: 50px;
        width:120px;
        border-radius: 10px;
        color:white;
        margin:5px;
        border: none;
        font-size: 18px;
        background-color:#F1B621;
}
@media screen and (max-width:550px) {
 
.search-input input{
width: 300px;
height: 50px;
border-radius: 10px;
border: solid 1px;
}
.search-input button{
  height: 50px;
        width:120px;
        border-radius: 10px;
        color:white;
        margin:5px;
        border: none;
        font-size: 18px;
        background-color:#F1B621;
}
}
</style>