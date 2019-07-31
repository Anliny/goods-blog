// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import axios from 'axios' // 1、在这里引入axios
Vue.prototype.$http = axios;   // 2、在vue中使用axios
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
    template: '<App/>'
})
