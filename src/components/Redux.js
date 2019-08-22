import React from 'react';
import { Button } from 'antd';
import store from '../store.js';

export default function Redux() {
    return <div>
        <Button onClick={() => {store.dispatch({type: 'minus'})}}>-</Button>
        <p>{store.getState()}</p>
        <Button onClick={() => {store.dispatch({type: 'add'})}}>+</Button>
    </div>
}