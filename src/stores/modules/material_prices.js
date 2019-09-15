import common_actions from './commons/common_actions.js'
import common_getters from './commons/common_getters.js'
import common_mutations from './commons/common_mutations.js'
import common_state from './commons/common_state.js'
import json from 'stores/modules/seeds/material_prices.json'
export default {
    namespaced: true,
    state: {
        ...common_state,
        json: json
    },
    getters: {
        ...common_getters
    },
    mutations: {
        ...common_mutations
    },
    actions: {
        ...common_actions
    }
}
