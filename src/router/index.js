import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout'

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
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
