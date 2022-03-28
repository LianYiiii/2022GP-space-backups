import React from 'react'
import { Layout } from 'antd';
import Headshot from '../Components/Headshot';
import { Link } from 'react-router-dom';
import UserDropdown from '../Components/UserDropdown';
// import Logo from '../Image/peiqi.jpg'
import './Person.css'
import { Image } from 'antd';
import PersonDescribe from '../Components/PersonDescribe';

const { Header, Content, Footer } = Layout;

function ImageDemo() {
  return (
    <Image
      width={200}
      height={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}
export default function Person() {
  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 8%' }}>
        <div className="logo">
          <Link to='/'>
            <h1>Personal Space</h1>
            {/* <img className='logoimg' src={Logo}></img> */}
          </Link>
        </div>
        <div className='headshot'>
          <Headshot />
          <UserDropdown />
        </div>
      </Header>
      <Content style={{ padding: '10% 0px 0px 18%', height: '100%' }}>
        <ImageDemo />
        <PersonDescribe />
      </Content>

    </Layout>
  )
}
