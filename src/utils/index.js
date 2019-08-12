import Axios from 'axios' // 1、在这里引入axios
import store from '../store/index'


// 添加请求拦截器

Axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    //判断是否存在token，如果存在将每个页面header都添加token
    console.log(store.state)
    if (store.state.token) {
        config.headers.common['token'] = store.state.token
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// http response 拦截器
Axios.interceptors.response.use(
    response => {

        return response;
    },
    error => {

        if (error.response) {
            switch (error.response.status) {
                case 401:
                    this.$store.commit('del_token');
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });

export default Axios