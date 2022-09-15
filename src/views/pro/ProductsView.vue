<template>
<div class="products">
    <ChooseProducts /> 
    
</div>
</template>

<script>
import ChooseProducts from '../../components/ChooseProducts.vue'


export default{
    components : {
        ChooseProducts,
        
    },
}

</script>

<style>
.products{
    width: 100%;
    height: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>