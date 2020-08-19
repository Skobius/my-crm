import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'

const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const Categories = () => import('../views/Categories.vue')
const Detail = () => import('../views/Detail.vue')
const History = () => import('../views/History.vue')
const Planning = () => import('../views/Planning.vue')
const Profile = () => import('../views/Profile.vue')
const Record = () => import('../views/Record.vue')

Vue.use(VueRouter)
  const routes = [
      {
          path: '/',
          name: 'Home',
          meta: {layout: 'main', auth: true},
          component: Home
      },
      {
          path: '/login',
          name: 'login',
          meta: {layout: 'empty'},
          component: Login
      },
      {
          path: '/register',
          name: 'register',
          meta: {layout: 'empty'},
          component: Register
      },
      {
          path: '/categories',
          name: 'categories',
          meta: {layout: 'main', auth: true},
          component: Categories
      },
      {
          path: '/detail/:id',
          name: 'detail',
          meta: {layout: 'main', auth: true},
          component: Detail
      },
      {
          path: '/history',
          name: 'history',
          meta: {layout: 'main', auth: true},
          component: History
      },
      {
          path: '/planning',
          name: 'planning',
          meta: {layout: 'main', auth: true},
          component: Planning
      },
      {
          path: '/profile',
          name: 'profile',
          meta: {layout: 'main', auth: true},
          component: Profile
      },
      {
          path: '/record',
          name: 'record',
          meta: {layout: 'main', auth: true},
          component: Record
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)

    if (requireAuth && !currentUser) {
        next('/login?message=login')
    } else {
        next()
    }
})

export default router
