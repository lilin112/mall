/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable indent */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login'
import Register from '../views/register/Register.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        // eslint-disable-next-line space-before-function-paren
        beforeEnter(to, from, next) {
            const { isLogin } = localStorage
            isLogin ? next({ name: 'Home' }) : next()
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
            const { isLogin } = localStorage
            isLogin ? next({ name: 'Home' }) : next()
        }
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const { isLogin } = localStorage
    const { name } = to
    const isLoginOrRegister = (name === 'Login' || name === 'Register');
    // eslint-disable-next-line space-infix-ops
    (isLogin || isLoginOrRegister) ? next(): next({ name: 'Login' })
})

// eslint-disable-next-line eol-last
export default router