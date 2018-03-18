import Vue from 'vue'
import Router from 'vue-router'
import Chatty from '@/components/chatty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chatty',
      name: 'Chatty',
      component: Chatty,
      props: {url: 'http://localhost:5000/talk', title: 'Just talk'}
    },
    {
      path: '/finance',
      name: 'Finance Chatty',
      component: Chatty,
      props: {url: 'http://localhost:5000/talk/finance', title: 'Finance'}
    },
    {
      path: '/insurance',
      name: 'Insurance Chatty',
      component: Chatty,
      props: {url: 'http://localhost:5000/talk/insurance', title: 'Insurance'}
    }
  ]
})
