import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import SIDER from '../constant/SIDER';
import { Link } from 'react-router-dom';
import Routes from '../router/Routes';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Routing = () => {
  
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed( collapsed );
  };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" mode="inline">
             {
              SIDER.map( item => (
                <SubMenu
                key={item.key}
                title={
                  <span>
                    <span>{item.name}</span>
                  </span>
                }
                >
                { item.sub.map( item =>(
                  <Menu.Item key={item.key}>
                    <Link to={item.path}>{item.name}</Link>
                  </Menu.Item> 
                ))}
               </SubMenu> 
               ))}
              </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background layout-pb" style={{ padding: 24, minHeight: 360 }}>
                <Routes/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Jesús Ponce ©{new Date().getFullYear()}</Footer>
        </Layout>
      </Layout>
    );
  }

export default Routing;