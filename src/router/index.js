import Vue from 'vue'
import Router from 'vue-router'
import BContainer from '@/components/page/Container'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'container',
            component: BContainer,
            redirect: '/',
            children: [
                {
                    path: '/',
                    name: "indexList",
                    props: route => ({
                        id: route.params.id
                    }),
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
            meta: {
                requiresAuth: true      // 要求验证的页面,在此情况下其子页面也会被验证.
            },
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
                    component: () => import('@/components/page/personal/personalArtileList.vue')
                }, {
                    path: '/personal/myArtileInfo',
                    name: "myArtileInfo",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/personal/personalArticleInfo.vue')
                }, {
                    path: '/personal/blogging',
                    name: "blogging",
                    props: route => ({
                        id: route.query.id
                    }),
                    component: () => import('@/components/page/personal/editArticle.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {     // 哪些需要验证
        if (!localStorage.getItem("token")) {                      // token存在条件   
            next({
                path: '/',                                               // 验证失败要跳转的页面
                query: {
                    redirect: to.fullPath                                 // 要传的参数
                }
            })
        } else {
            next()
        }
    } else {
        next()                                                       // 确保一定要调用 next()
    }
})

export default router
