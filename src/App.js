import React, {Component} from 'react';
import { Button } from 'antd';
import CommentList from './components/CommentList.js';
import Hoc from './components/Hoc.js';
import './index.css';

export default class App extends Component{
    render() {
        return <div>
            <Button type="primary">antd按钮</Button>
            <CommentList></CommentList>
            <Hoc></Hoc>
        </div>
    }
}