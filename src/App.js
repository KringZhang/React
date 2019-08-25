import React, {Component} from 'react';
import { Button } from 'antd';
import CommentList from './components/CommentList.js';
import Hoc from './components/Hoc.js';
import UseState from './components/UseState.js';
import ContextDemo from './components/ContextDemo.js';
import AntdForm from './components/AntdForm.js';
import Redux from './components/Redux';
import ReactRouter from './components/ReactRouter';
import LayoutDemo from './components/LayoutDemo';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';

export default class App extends Component{
    render() {
        return <div>
            <Provider store={ store }>
                {/* <Button type="primary">antd按钮</Button>
                <CommentList></CommentList>
                <Hoc></Hoc>
                <UseState></UseState>
                <ContextDemo></ContextDemo> */}
                {/* <AntdForm></AntdForm> */}
                {/* <Redux></Redux> */}
                {/* <ReactRouter></ReactRouter> */}
                <LayoutDemo></LayoutDemo>
            </Provider>
        </div>
    }
}