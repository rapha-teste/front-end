import { createStore } from 'redux';

const INITIAL_STATE = {
    user: [],
};

function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE': 
            return {...state, user: [ ...state.user, action.title] } ;
        default:
            return state;
    }
}

const store = createStore(users);

export default store;   