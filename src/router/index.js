import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('@/components/home'),
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    component: () => import('@/views/index')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/login')
        }
    ]
})
