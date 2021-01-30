import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let user = JSON.parse(window.localStorage.getItem('userInfo'));
if (user == null) {
    user = {
        uid: "null",
        username: "BlogNews",
        isEdit: false
    }
}

export default new Vuex.Store({

    state: {
        uid: user.uid,
        username: user.username,
        isEdit: user.isEdit
    },
    mutations: {},
    actions: {},
    modules: {}
})
