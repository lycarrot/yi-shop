import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Index from '../views'
import Home from '../views/tab/home.vue';
import Classify from '../views/tab/classify.vue';
import Cart from '../views/tab/cart.vue';
import My from '../views/tab/my.vue';
import Login from '../views/login/index.vue';


const routes = [{
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/home',
    children: [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          nav: {
            show: false
          },
          tab: {
            show: true
          },

        }
      }, {
        path: '/classify',
        name: 'classify',
        component: Classify,
        meta: {
          nav: {
            show: false
          },
          tab: {
            show: true
          }
        }
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {
          nav: {
            show: false
          },
          tab: {
            show: true
          },
          login: true
        }
      },
      {
        path: '/my',
        name: 'my',
        component: My,
        meta: {
          nav: {
            show: false
          },
          tab: {
            show: true
          }
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          nav: {
            show: false
          },
          tab: {
            show: false
          }
        }
      },

    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router