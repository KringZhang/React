
const initialState = {
    isLogin: false,
    loading: false
}
const userReducer = (defaultState = initialState, action) => {
    switch(action.type) {
        case 'clickLogin':
            return {
                ...defaultState,
                isLogin: false,
                loading: true
            }
        case 'login':
            return {
                ...defaultState,
                isLogin: true,
                loading: false
            }
        default:
            return defaultState;
    }
}

// action creators
const login = () => dispatch => {
    dispatch({  type: 'clickLogin'});
    setTimeout(() => {
        dispatch({  type: 'login' });
    }, 2000);
}

export { userReducer, login };