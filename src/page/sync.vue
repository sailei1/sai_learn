<template>
  <div>
  <div  v-on:click="testTrigger" >
       sync {{sync}}
  </div>

  <div  v-on:click="reset" >
    sync {{sync}}
  </div>

  </div>



</template>

<style lang="scss" scoped>

</style>
<script>
    import {mapGetters} from 'vuex';
    import  * as mutation_types from '../store/mutations';
    import  * as action_types from '../store/actions';

     export default{
       data(){
         return {
         }
       },
       computed:{
         ...mapGetters({
           sync: 'getSync'
         })
       },
       methods:{
         testTrigger(){
           this.$store.commit(mutation_types.DYNAMIC_MUTATIONS);
           this.$store.dispatch(action_types.DYNAMIC_ACTIONS,5);
         },
         reset(){

         }
       }
     }

</script>
