import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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

export default function ReactRouter() {
    return <div>
        <BrowserRouter>
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route path="/about/detail/:id" component={Address}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    </div>
}