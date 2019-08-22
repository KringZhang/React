import { createStore } from 'redux';

const reducer = (defaultState = 1, action) => {
    switch(action.type) {
        case 'add':
            return defaultState + 1
        case 'minus':
                return defaultState - 1
        default:
            return defaultState;
    }
}

const store = createStore(reducer);

export default store;