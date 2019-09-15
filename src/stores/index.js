import modules from './modules'
import Vuex from 'vuex'

export default function(vue) {
    vue.use(Vuex);
    return new Vuex.Store({
        modules: modules
    })
}
