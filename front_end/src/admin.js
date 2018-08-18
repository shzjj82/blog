import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import LayoutHeader from './components/Header/index'
import User from './components/User/index'
import './style/common.less';
const { Header, Content } = Layout

export default class Admin extends Component {
    render() {
        return (
            <Layout className='container'>
                <Header className='header'>
                    <LayoutHeader></LayoutHeader>
                    <User></User>
                </Header>
                <Content className='main'>
                    <div className='content'>
                        {this.props.children}
                    </div>
                </Content>
            </Layout>
        )
    }
}