import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to={'/dashboard'}> Dashboard</NavLink>, '1', <PieChartOutlined />),
  getItem(<NavLink to={'/dashboard/profile'}>Profile</NavLink>, '2', <DesktopOutlined />),
  getItem(<NavLink to={'/dashboard/password-reset'}>Reset Password</NavLink>, '3', <UserOutlined />),
  getItem(<NavLink to={'/dashboard/fund-your-wallet'}>Fund Wallet</NavLink>, '4', <TeamOutlined />),
  getItem(<NavLink to={'/dashboard/referral'}>Referral</NavLink>, '5', <TeamOutlined />),
  getItem(<NavLink to={'/dashboard/rules'}>Rules</NavLink>, '6', <TeamOutlined />),
  getItem(<NavLink to={'/dashboard/T&Cs'}>Terms-of-use</NavLink>, '7', <TeamOutlined />),
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 10,
              height: 'max-content'
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideBar;