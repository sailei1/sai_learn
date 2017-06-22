/**
 * Created by zhangsailei
 */
import  * as mutation_types from '../mutations';
import  * as action_types from '../actions';


const state={
  sync:0,
}
const getters = {
  getSync: function(state){
    return state.sync;
  }
};
const   mutations={
  [mutation_types.DYNAMIC_MUTATIONS](state, n){
  state.sync += (n||1);
}
};
const actions ={
  [action_types.DYNAMIC_ACTIONS]({commit},n){
    setTimeout(() => {
      commit(mutation_types.DYNAMIC_MUTATIONS,n);
    }, 1000)

  }
};


export {
  state,
  getters,
  actions,
  mutations
}
