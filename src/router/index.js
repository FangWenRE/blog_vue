import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
    }, {
        path: '/display',
        name: "display",
        component: () => import('../views/Article')
    }

]

const router = new VueRouter({
    scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
        if (to.fullPath == "/edit" || to.path == "/display") {
            var top;
            if (window.innerWidth >= 700) {
                top = 430
            } else {
                top = 267
            }
            return {
                x: 0,
                y: top
            }
        }
    },
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
