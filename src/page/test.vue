<template>
  <div>
    <img src="../assets/logo.png">

    <template v-for="item in customComponentList">
      <component :is="item" ></component>
    </template>

  </div>
</template>

<script>
  import hello from '../components/Hello.vue';
export default {
  name: 'app',
  data(){
      return {
        customComponentList:[],
      }
  },
  components:{
    hello
  },
  methods:{
    update(p){
        console.log('methods update', p);
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
