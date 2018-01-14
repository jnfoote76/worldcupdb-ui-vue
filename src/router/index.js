import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Query from '@/components/query'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/query',
      name: 'Query',
      component: Query
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
