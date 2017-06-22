<template>
    <div>
      <span>{{msg}} </span>
      <div  v-on:click="testTrigger" >click here</div>
      modal: {{modal}}
      <p v-if="p">props:{{p}} </p>
    </div>
</template>

<style lang="scss" scoped>
  @import "./hello.scss";
</style>

<script>
  import {ajax} from '../common/common';
  import urls from '../common/urls';
  import {mapGetters} from 'vuex';

  import  * as mutation_types from '../store/mutations';
  import  * as action_types from '../store/actions';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemInfo:null,
    }
  },
  props:['p'],
  mounted : function () {
      this.test();
      if(this.p){
       this.$emit('update',this.p); //通知parent
      }
  },
  watch: {
    'modal': {
      handler: function (val, oldVal) {
        console.log('val: '+ val +'oldVal:'+ oldVal);
      }
    }
  },

  computed:{
    ...mapGetters({
      modal: 'getTest'
    })
  },


  methods: {
      test(){

        ajax(urls.detail).then(json => {
          this.itemInfo = json.itemInfo;
        }).catch(err => {

        })
      },
    testTrigger(p){

      // var state=  this.$store.state.modal.test;
     // var state=this.$store.getters.getTest;

      this.$store.commit(mutation_types.INCREMENT,10);
      this.$store.dispatch(action_types.INCREMENTASYNC,5);
      this.handleIt();


    },
    'handleIt': function (msg) {
      //var test= this.$store.state.modal.test;
      let  test=this.modal;
      alert(test);
    }
  }
}
</script>


