export default {
    initializeModels ({ state, commit, rootState  }) {
        if (!state.initialized && state.loadJson) {
            commit('createMany', state.json)
        }
    }
}
