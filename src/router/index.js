import Vue from 'vue'
import Router from 'vue-router'
import BContainer from '@/components/page/Container'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'container',
            component: BContainer,
            redirect: '/',
            children: [
                {
                    path: '/',
                    name: "list",
                    component: () => import('@/components/page/index-list.vue')
                }, {
                    path: '/article',
                    name: "article",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/article.vue')
                }
            ]
        }, {
            path: '/share',
            name: 'share',
            component: () => import('@/components/page/Share')
        }, {
            path: '/gbook',
            name: 'gbook',
            component: () => import('@/components/page/Gbook')
        }, {
            path: '/register',
            name: 'register',
            component: () => import('@/components/page/register')
        }, {
            path: '/personal',
            name: 'personal',
            component: () => import('@/components/page/personal/personal'),
            redirect: '/personal/userInfo',
            children: [
                {
                    path: '/personal/userInfo',
                    name: "userInfo",
                    component: () => import('@/components/page/personal/userInfo.vue')
                }, {
                    path: '/personal/collection',
                    name: "collection",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/article.vue')
                }, {
                    path: '/personal/comcern',
                    name: "comcern",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/article.vue')
                }, {
                    path: '/personal/myBlog',
                    name: "myBlog",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/article.vue')
                }, {
                    path: '/personal/blogging',
                    name: "blogging",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/article.vue')
                }
            ]
        }
    ]
})
