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

const mapStateToProps = state => ({ num: state });
const mapDispatchToProps = {
    add: () => ({ type: 'add' }),
    minus: () => ({ type: 'minus' })
}

@connect(mapStateToProps, mapDispatchToProps)
class ReduxDemo extends React.Component {
    render() {
        const { num, add, minus } = this.props;
        return <div>
            <Button onClick={minus}>-</Button>
            <p>{num}</p>
            <Button onClick={add}>+</Button>
        </div>
    }
}

export default ReduxDemo;
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);