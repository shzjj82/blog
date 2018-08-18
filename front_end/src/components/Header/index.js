import React, { Component } from 'react';
import { Menu, Icon } from "antd";
import { Link } from 'react-router-dom';
const MenuItem = Menu.Item;

export default class LayoutHeader extends Component {
    render() {
        return (
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectable={false}
                >
                    <MenuItem>
                        <Link to='/admin/technical'>
                            技术贴
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/admin/blog'>
                            生活情感
                        </Link>
                    </MenuItem>
                    <MenuItem disabled>
                        <Link to='/admin/blog'>
                            照片墙
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/admin/about'>
                            关于我们
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}