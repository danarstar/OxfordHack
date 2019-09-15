export default {
    create (state, model) {
        state.models.push(model)
    },
    createMany (state, models) {
        state.models.push(...models)
    },
    update (state, {id, model}) {
        let current = state.models.find((currentModel) => currentModel.pk == id)
        let index = state.models.indexOf(state.models.find(model))
        state.models.splice(index, 1, model)
    },
    delete (state, id) {
        let model = state.models.find((model) => model.pk == id)
        let index = state.models.indexOf(state.models.find(model))
        state.models.splice(index, 1)
    }
}
