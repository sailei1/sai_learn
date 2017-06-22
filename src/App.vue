<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
    <hello :p="1" @update="update"></hello>
  </div>
</template>

<script>
  import hello from './components/Hello.vue';
export default {
  name: 'app',
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
