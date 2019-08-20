import React, { Component } from 'react';
import { Input, Button } from 'antd';
/**
 * 高阶组件封装antd表单
 */

function withNormalForm(Comp) {
	return class extends Component{
		constructor(props) {
			super(props);
			this.options = {};
			this.state = {
				form: {

				}
			}
			this.change = this.change.bind(this);
		}
		change(e) {
			console.log(e.target);
			const { name, value } = e.target;
			this.setState({
				form: {...this.state.form, [name]: value}
			}, () => this.validateField(name));
		}
		validateField(name) {
			const rules = this.options[name].rules;
			const res = !rules.some(rule => {
				if(rule.required) {
					if(!this.state.form[name]) {
						this.setState({
							[name + 'Message']: rule.message
						});
						return true;
					}
				}
			});
			if(res) {
				this.setState({
					[name + 'Message']: ''
				});
			}
			return res;
		}
		validateAll = cb => {
			const results = Object.keys(this.options).map(key => this.validateField(key));
			const res = results.every(x => !!x);
			cb(res, this.state.form);
		}
		getFieldDec(fieldName, options) {
			this.options[fieldName] = options;
			return InputComp => (
				<div>
					{
						React.cloneElement(InputComp, {
							name: fieldName,
							onChange: this.change,
						})
					}
					{
						this.state[fieldName + 'Message'] &&
						<p style={{color: 'red'}}>
							{this.state[fieldName + 'Message']}
						</p>
					}
				</div>
			)
		}
		render() {
			return <Comp validateAll={this.validateAll} getFieldDec={this.getFieldDec.bind(this)}></Comp>
		}
	}
}

@withNormalForm
class NormalForm extends Component{
	submit = () => {
		this.props.validateAll((isValid, data) => {
			console.log(isValid, data);
			if(isValid) {
				console.log('校验通过');
			} else {
				console.log('校验失败');
			}
		});
	}
    render() {
		const { getFieldDec } = this.props;
        return <div>
			{
				getFieldDec('userName', {
					rules: [{ required: true, message: '用户名不能为空！' }]
				})(<Input placeholder="请输入用户名"/>)
			}
			{
				getFieldDec('pwd', {
					rules: [{ required: true, message: '密码不能为空！' }]
				})(<Input type="password" placeholder="请输入密码"/>)
			}
            <Button type="primary" onClick={this.submit}>提交</Button>
        </div>
    }
}

export default NormalForm;