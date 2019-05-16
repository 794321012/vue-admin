import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isCollapse: false
    },
    mutations: {
        MENU_TOGGLE(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        toggle({ commit }) {
            commit('MENU_TOGGLE')
        }
    }
})
