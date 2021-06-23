<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" placeholder="글자를 입력하세요" @keyup.enter="addTodo">
        <button class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus"></i>
        </button>
  </div>
  <!-- {{newTodoItem}}
  <p> <input type="checkbox" v-model="checked"></p> -->

  {{checked}}
</template>

<script>
export default {
    name:'input',
    data(){
        return{
            newTodoItem:'',
            // checked:false
        }
    },
    methods:{
        addTodo(){
            console.log(this.newTodoItem);
            let value = this.newTodoItem;
            // localStorage.setItem(value, value);
            this.$emit('addTodo', value);
            this.clearInput();
        },
        clearInput(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    
    input:focus{outline: none; }
    .inputBox{background: #fff; line-height: 50px; height: 50px; border-radius: 5px; margin-bottom: 10px;}
    .inputBox input{border-style: none; font-size: 1rem;}
    .addContainer{float: right; background: linear-gradient(to right, #6478fb, #8763fb); width: 3rem; height: 50px;
    border-radius: 0 5px 5px 0; border-style: none;}
    .addBtn{color: white;}
</style>