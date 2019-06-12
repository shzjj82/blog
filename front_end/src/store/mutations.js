import * as TYPES from './mutation-types';

export default {
    [TYPES.SET_TOKEN](state,payload){
        state.token = payload;
    }
}