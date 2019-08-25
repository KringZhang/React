import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../userReducer';

function Home() {
    return <div>
        home
    </div>
}

function About() {
    return <div>
        <Link to="/about/detail/ECOD15423">详情</Link>
    </div>
}

function User() {
    return <div>
        个人中心
    </div>
}

function Address(props) {
    console.log(props);
    return <div>
        路由传参是:{ props.match.params.id }
        <button onClick={props.history.goBack}>返回</button>
    </div>
}

function NotFound({location}) {
    return <div>
        404~ {location.pathname}不存在！
    </div>
}

//路由守卫(验证在进入该路由时，是否有权限（是否登陆过）)
const RouterGuard = connect(state => ({ isLogin: state.userReducer.isLogin }))(
    ({ component: Comp, isLogin, ...rest }) => {
        return <Route {...rest} render={ props => isLogin ? <Comp /> : 
                    <Redirect to={{ pathname: '/login', state: { redirectPathName: props.location.pathname }}} />}
                >
        </Route>
    }
);

const Login = connect(
    state => ({ isLogin: state.userReducer.isLogin, loading: state.userReducer.loading }),
    { login }
)(function({ location, isLogin, loading, login }) {
    console.log(location, login)
    const pathname = location.state.redirectPathName || '/';
    if(isLogin) {
        return <Redirect to={pathname}></Redirect>
    }
    return <div>
        <button onClick={login} disabled={loading}>
            { loading ? '登录中...' : '登录' }
        </button>
    </div>
});


export default function ReactRouter() {
    return <div>
        <BrowserRouter>
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/user">个人中心</Link>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route path="/about/detail/:id" component={Address}></Route>
                <RouterGuard path="/user" component={User}></RouterGuard>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    </div>
}