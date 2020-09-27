import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        getUser({ commit }, userInfo) {
            commit('SET_USER', userInfo)
        }
    },
    plugins: [createPersistedState()]
})