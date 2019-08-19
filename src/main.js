
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// import Axios from 'axios' // 1、在这里引入axios
import store from './store/index'
import $http from './utils/index'
// Axios.defaults.headers.common['token'] = store.state.token;
Vue.prototype.$http = $http;   // 2、在vue中使用axios
Vue.config.productionTip = false


Vue.use(iView, {
    transfer: true,
    size: 'large',
    select: {
        arrow: 'md-arrow-dropdown',
        arrowSize: 20
    }
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
})
