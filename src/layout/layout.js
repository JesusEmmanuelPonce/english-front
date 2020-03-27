import React from 'react';
import { Layout, Menu } from 'antd';
import SIDER from '../constant/SIDER';
import { Link } from 'react-router-dom';
import Routes from '../router/Routes';
import { ContainerOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;

const Routing = () => {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
            {
              SIDER.map(item => (
                <Menu.Item key={item.key}>   
                  <ContainerOutlined />
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              ))
            }    
        </Menu>
      </Sider>
      <Layout> 
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background layout-pb" style={{ padding: 24, minHeight: 500 }}>
            <Routes/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jesús Ponce ©{new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
    );
  }

export default Routing;