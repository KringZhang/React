import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import AntdForm from './AntdForm';
import CommentList from './CommentList';
import ContextDemo from './ContextDemo';
import Hoc from './Hoc';
import Redux from './Redux';
import UseState from './UseState';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class LayoutDemo extends React.Component{

    render() {
        return <Layout>
                    <BrowserRouter>
                        <Header className="header">
                            <div className="logo" />
                        </Header>
                        <Layout>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: 0 }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user" />
                                                模块1
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="1">
                                            <Link to="/CommentList">CommentList</Link>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <Link to="/ContextDemo">ContextDemo</Link>
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <Link to="/Hoc">Hoc</Link>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <Link to="/Redux">Redux</Link>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="laptop" />
                                                模块2
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="5">
                                            <Link to="/UseState">UseState</Link>
                                        </Menu.Item>
                                        <Menu.Item key="6">
                                            <Link to="/AntdForm">AntdForm封装</Link>
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '0 24px 24px' }}>
                                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb> */}
                                <Content
                                    style={{
                                        background: '#fff',
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                    <Switch>
                                        {/* <Route exact path="/" component={Home}></Route> */}
                                        <Route exact path="/CommentList" component={CommentList}></Route>
                                        <Route exact path="/ContextDemo" component={ContextDemo}></Route>
                                        <Route exact path="/Hoc" component={Hoc}></Route>
                                        <Route exact path="/Redux" component={Redux}></Route>
                                        <Route exact path="/UseState" component={UseState}></Route>
                                        <Route exact path="/AntdForm" component={AntdForm}></Route>
                                    </Switch>
                            </Content>
                            </Layout>
                        </Layout>
                    </BrowserRouter>
    </Layout> 
    }
}