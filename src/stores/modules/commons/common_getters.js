export default {
    byId: (state, getters, rootState) => (id) => {
        return state.models.filter((object) => object.pk == id)
    },
}
