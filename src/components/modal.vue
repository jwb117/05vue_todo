<template>
  <div class="modalContainer shadow">
      <div class="black-bg">
          <slot name="header"></slot>
      </div>
      <p>
          <slot name="footer"></slot>
      </p>

  </div>
</template>

<script>
export default {

}
</script>

<style>
    .modalContainer{background: red; 
    position: fixed; 
    width: 300px;
    padding: 20px 30px;
    color:#fff;
    left:50%; top:50%;
    transform: translate(-50%, -50%); 
    }
</style>