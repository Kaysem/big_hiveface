import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Overview from '@/components/overview'  //总概览
import Main from '@/components/main'  //主菜单
import Login from '@/components/login'  //登录




Vue.use(Router)

export default new Router({
//mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, saveposition) {
    

    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login'],resolve)
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect:'/Overview',
      meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children:[
     
        {
          path: '/overview',name: 'Overview',component: Overview,meta: {requireAuth: true}
        },
      

      ]
    
    }

    


  ]
})
