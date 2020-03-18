import React from 'react';
import { Layout, Menu } from 'antd';
import SIDER from '../constant/SIDER';
import { Link, Switch, Route } from 'react-router-dom';
import Get from './get';
import Numbers from './numbers';
import Verbs from './verbs';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
              <Switch>
                <Route exact path="/get" component={Get} />
                <Route exact path="/verbs" component={Verbs}/>
                <Route exact path="/numbers" component={Numbers}/>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;