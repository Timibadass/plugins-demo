import Vue from 'vue'
import VueRouter from 'vue-router'
import Notifications from '../views/Notifications.vue'
import Home from '../views/Home.vue'
import Vuelidate from '../views/Vuelidate.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications
    },
    {
        path: '/vuelidate',
        name: 'Vuelidate in action',
        component: Vuelidate
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router