import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' // 样式文件

Vue.use(mavonEditor)
Vue.use(ElementUI);

Vue.prototype.$http = axios
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),
    watch: {
        "this.$route.fullPath": (n, o) => {

            console.log(n, o)

        }
    }
}).$mount('#app')
