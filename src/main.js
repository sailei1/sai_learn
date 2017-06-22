// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */

//路由钩子

Vue.mixin({
  beforeRouteEnter(to, from, next){
    debugger;
    next(vm => {
      vm.customComponentList = {
        'hello': require('@/components/Hello.vue'),
      };
      debugger;
    })

    next(true);
  },
  beforeRouteUpdate(to, from, next){
    debugger;
    next(true);
  },
  beforeRouteLeave(to, from, next){
    debugger;
    next(true);
  }
});


let vm= new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h('router-view')
})



if(process.env.NODE_ENV == 'development'){
  window.vm=vm;
}
