import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react'
import { Link } from 'react-router-dom';
const menu = (
    <Menu >
        <Menu.Item key="0">
            <Link to='/person' style={{ fontSize: 16 }}>
                个人中心
            </Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to='/login' style={{ fontSize: 16 }}>
                退出登录
            </Link>
        </Menu.Item>
        {/* <Menu.Divider />
        <Menu.Item key="3" disabled>
            3rd menu item（disabled）
        </Menu.Item> */}
    </Menu>
);



export default function UserDropdown() {
    return (
        <>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" style={{ float: 'right', marginLeft: 30, fontSize: 16 }} onClick={e => e.preventDefault()}>
                    username
                    {/* <DownOutlined /> */}
                </a>
            </Dropdown>
        </>
    )
}
