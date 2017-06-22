import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

const mapObj={
  'index'       : r => require.ensure([], ()=> r(require('@/page/index.vue')), 'index'),
  'test'       : r => require.ensure([], ()=> r(require('@/page/test.vue')), 'test'),
}

const router = new Router({
  mode: process.env.NODE_ENV == 'development' ? 'hash' : 'history',
  base: '/',
  routes: [
    {path: "/", name: 'index', component: mapObj.index},
    {path: "/test", name: 'test', component: mapObj.test},
  ]

})

// router.beforeEach((to, from, next) => {
//   debugger
//       console.log('to :', to.name  +' from:',from.name);
//       next(true);
// })










export default router;
