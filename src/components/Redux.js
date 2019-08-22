import React from 'react';
import { Button } from 'antd';
import store from '../store.js';
import { connect } from 'react-redux';

// export default function ReduxDemo() {
//     return <div>
//         <Button onClick={() => {store.dispatch({type: 'minus'})}}>-</Button>
//         <p>{store.getState()}</p>
//         <Button onClick={() => {store.dispatch({type: 'add'})}}>+</Button>
//     </div>
// }

const mapStateToProps = state => ({ num: state.btnReducer.num, loading: state.btnReducer.loading });
const mapDispatchToProps = {
    add: () => ({ type: 'add' }),
    minus: () => ({ type: 'minus' }),
    addAsync: () => dispatch => {
        dispatch({ type: 'loading', loading: true });
        setTimeout(() => {
            dispatch({ type: 'loading', loading: false });
            dispatch({ type: 'addAsync' });
        }, 2000);
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ReduxDemo extends React.Component {
    render() {
        const { num, loading, add, minus, addAsync } = this.props;
        return <div>
            <Button onClick={minus}>-</Button>
            <span>{num}</span>
            <Button onClick={add}>+</Button>
            <Button onClick={addAsync}>
                { loading ? '...' : 'addAsync' }
            </Button>
        </div>
    }
}

export default ReduxDemo;
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);