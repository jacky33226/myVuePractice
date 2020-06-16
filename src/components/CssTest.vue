<template>
  <div>
  <img src="../assets/logo.png" class="blur mask">
  <img src="../assets/logo.png" class="blurandmask">
  </div>
</template>

<script>
export default {
  name: 'CssTest',
  date(){
    return
  }

}


</script>


<style scoped>

  /*   */
  .blur{
    -webkit-filter: blur(5px); /* Chrome, Opera */
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }

  .mask{

    background:rgba(0,0,0,.3);
    /*background:hsla(0,100%,80%,0.5)*/
    /*background:#000; opacity:0.5; */
  }
  .blurandmask:hover{
    -webkit-filter: blur(5px); /* Chrome, Opera */
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    background:rgba(0,0,0,.1);
  }

</style>
