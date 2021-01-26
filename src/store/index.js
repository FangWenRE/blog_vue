import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var user = JSON.parse(window.localStorage.getItem('userInfo'));
export default new Vuex.Store({
    state: {
        uid: ""
    },
    mutations: {},
    actions: {},
    modules: {}
})
