import * as types from './types.js'

//actions其实就是在操作mutations
export default {
    UserLogin({ commit }, data){
        commit(types.LOGIN, data);
    },
    UserName({ commit }, data){
        commit(types.USERNAME, data);
    }
}
