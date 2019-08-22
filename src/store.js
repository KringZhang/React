import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (defaultState = { num: 1, loading: false }, action) => {
    switch(action.type) {
        case 'add':
            return {
                ...defaultState,
                num: defaultState.num + 1
            }
        case 'minus':
            return {
                ...defaultState,
                num: defaultState.num - 1
            }
        case 'addAsync':
            return {
                ...defaultState,
                num: defaultState.num + 1
            }
        case 'loading':
            return {
                ...defaultState,
                loading: action.loading,
            }
        default:
            return defaultState;
    }
}

const store = createStore(combineReducers({
    btnReducer: reducer
}), applyMiddleware(logger, thunk));

export default store;