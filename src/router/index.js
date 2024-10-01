import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import { getAuth } from "firebase/auth";

const routes =  [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      login: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
    meta: {
      login: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      login: false
    }
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(( to, from, next ) => {
  const authRequired = to.meta.login
  if ( authRequired ) {
    next("/login")
  }
  next()
})

export default router