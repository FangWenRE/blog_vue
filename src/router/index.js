import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Page',
        component: Page
    },
    {
        path: '/price',
        name: 'price',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited./* webpackChunkName: "about" */
        component: () => import('../components/Tables')

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
