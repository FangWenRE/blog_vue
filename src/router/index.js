import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
        component: () => import('../components/Context')
    },
    {
        path: '/price',
        name: 'price',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited./* webpackChunkName: "about" */
    }, {
        path: '/about',
        name: 'about',
        component: () => import('../components/Tables')

    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import('../components/Edit')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
