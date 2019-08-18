import React, { Component } from 'react';
import { Button } from 'antd';
/**
 * 高阶组件Hoc
 * 用来扩展组件
 */
const withButtonFunc = Comp => {
    const className = 'colorRed';
    return props => <Comp className={className} {...props}>高阶组件</Comp>
}
const WithButton = withButtonFunc(Button);

export default class Hoc extends Component{
    render() {
        return <div>

            <WithButton id='zks-btn'></WithButton>

            <RadioGroup name='language'>
                <Radio value='js'>js</Radio>
                <Radio value='java'>java</Radio>
                <Radio value='nodejs'>nodejs</Radio>
            </RadioGroup>

        </div>
    }
}

// RadioGroup
function RadioGroup(props) {
    return <div className='box'>
        {
            React.Children.map(props.children, item => {
                return React.cloneElement(item, { name: props.name });
            })
        }
    </div>
}

function Radio({children, ...rest}) {
    return <label onClick={(e) => click(e)}>
        <input type='radio' {...rest} />
        { children }
    </label>
}

const click = (e) => {
    console.log(e.target.value)
}