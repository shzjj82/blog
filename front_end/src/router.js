import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'login',
      component: Login,
      children:[{
        path:'',
        name:'form-login',
        component:()=>import('@/components/FormLogin')
      },{
        path:'register',
        name:'form-register',
        component:()=>import('@/components/FormRegister')
      }]
    },
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      children:[{
        path:'',
        name:'recommend',
        component:()=>import('@/views/Recommend')
      }]
    }
  ]
})
