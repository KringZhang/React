import React, { Component, PureComponent } from 'react';
/**
 *  react组件的两种创建方式
 * 
 * */
function Comment(props) {
    console.log('render');
    return <div>
        {props.obj.name}--{props.obj.age}
    </div>
}
const Memo = React.memo((props) => {
    console.log(props);
    console.log('render Memo');
    return <div>
        {props.name}--{props.age}
    </div>
});
class Comment2 extends PureComponent{

    render() {
        console.log('render22222');
        return <div>
            {this.props.name}--{this.props.age}
        </div>
    }
}
export default class CommentList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            commentList: [
                {
                    name: 'Tom',
                    age: 21
                },
                {
                    name: 'Jerry',
                    age: 22
                }
            ]
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                commentList: [
                    {
                        name: 'Tom',
                        age: 21
                    },
                    {
                        name: 'Jerry',
                        age: 22
                    }
                ]
            })
        }, 1000);
    }
    render() {
        return <div>
            {
                this.state.commentList.map((item, index) => <Comment key={index} obj={item}></Comment>)
            }
            {
                this.state.commentList.map((item, index) => <Memo key={index} {...item}></Memo>)
            }
            {
                this.state.commentList.map((item, index) => <Comment2 key={index} {...item}></Comment2>)
            }
        </div>
        
    }
}