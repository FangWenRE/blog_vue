import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let user = JSON.parse(window.localStorage.getItem('userInfo'));
if (user == null) {
    user = {
        uid: "",
        isEdit: false
    }
}

export default new Vuex.Store({

    state: {
        uid: user.uid,
        isEdit: user.isEdit
    },
    mutations: {},
    actions: {},
    modules: {}
})
