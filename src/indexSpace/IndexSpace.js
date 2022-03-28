import React from 'react'
import './IndexSpace.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import Headshot from '../Components/Headshot';
// import PerContent from '../Components/PerContent';
import AddComment from '../Components/AddComment';
import { Link } from 'react-router-dom';
import UserDropdown from '../Components/UserDropdown';
import Logo from '../Image/peiqi.jpg'

const { Header, Content, Footer } = Layout;

const printContent = () => {
    
}

export default function IuseIndex() {
    return (
        <>
            <Layout className="layout" style={{ height: 'auto' }}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 8%' }}>
                    <div className="logo">
                        {/* <Link to=''> */}
                        <h1>Personal Space</h1>
                        {/* <img className='logoimg' src={Logo}></img> */}
                        {/* </Link> */}
                    </div>
                    {/* <span className='header-username' style={{ color: 'white', float: 'right', marginLeft: 30 }}>LianYii</span> */}
                    <div className='headshot'>
                        <Headshot />
                        <UserDropdown />
                    </div>

                    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to='/' >
                                首页
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='mine' >
                                我的
                            </Link>
                        </Menu.Item>
                        {/* <Menu.Item key="3">
                            <Link to='tree' >
                                目录树
                            </Link>
                        </Menu.Item> */}
                    </Menu>
                </Header>
                <Content style={{ padding: '100px 50px 0px', height: 'auto' }}>
                    <div className="site-layout-content">
                        <AddComment />
                        {/* <PerContent >
                            <PerContent></PerContent>
                        </PerContent>
                        <PerContent /><PerContent /><PerContent /><PerContent /> */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>----- END -----</Footer>
            </Layout>
        </>
    )
}
