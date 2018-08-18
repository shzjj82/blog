import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import './index.less';
import MenuItem from '../../../node_modules/antd/lib/menu/MenuItem';

export default class User extends Component {
    render() {
        const menu = (
            <Menu>
                <MenuItem>
                    <a href='#/edit/userInfo'>
                        修改密码
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href='#/login'>
                        退出登陆
                    </a>
                </MenuItem>
            </Menu>
        );

        return (
            <div className='user'>
                <img src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532266518&di=25e89f0c281afa09a5cf7db83f8b13fe&src=http://img3.duitang.com/uploads/item/201508/18/20150818212758_JXLHZ.thumb.700_0.jpeg' alt='logo' className='header-icon' />
                <Dropdown className='user-name' overlay={menu}>
                    <span className="ant-dropdown-link" href="#">
                        张晶杰<Icon type="down" />
                    </span>
                </Dropdown>
            </div>
        )
    }
}