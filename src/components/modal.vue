<template>
  <div class="black-bg">
      <div class="modalContainer shadow"   v-on:click.stop.prevent='modal=false'>
            <div class="subject">
                <slot name="header"></slot>  
            </div>        
            <div class="closeBox">              
                <slot name="footer"></slot>
            </div>
      </div>
          
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .modalContainer{    
    position: fixed; 
    width: 360px;
    color:#fff;
    left:50%; top:50%;
    transform: translate(-50%, -50%); 
    height: 128px;
    }
    .subject{background: blue; 
    position: fixed; 
    width: 300px;
    padding: 20px 30px; top: 0;}

    .closeBox{background: red; position: fixed;
    width: 300px; padding: 20px 30px; bottom: 0;}

    .black-bg{width: 100%; background: rgba(0,0,0,0.9); height: 100%; position: fixed; top:0; left:0;}
</style>