import React, {Component} from 'react';
import { Button } from 'antd';
import CommentList from './components/CommentList.js';

export default class App extends Component{
    render() {
        return <div>
            <Button type="primary">antd按钮</Button>
            <CommentList></CommentList>
        </div>
    }
}