/**
 * Created by zhangsailei
 */
import  * as mutation_types from '../mutations';
import  * as action_types from '../actions';

const state={
    test:0,
}
const getters = {
    getTest: function(){
        return state.test;
    }

};
const  mutations = {
  [mutation_types.INCREMENT]:function(state, n) {
        //debugger;
        state.test += (n||0);
    },
  [mutation_types.DECREMENT]:function(state){
        state.test--;
    }
};

const actions ={
  [action_types.INCREMENTASYNC]:function({ commit},n) {
        // debugger;
        setTimeout(() => {
            commit(mutation_types.INCREMENT,n);
            alert('Async:'+state.test);
        }, 1000)
    }
};




export default {
    state,
    getters,
    actions,
    mutations
}
