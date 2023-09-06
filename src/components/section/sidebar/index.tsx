

import Sider from 'antd/es/layout/Sider';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';

const CustomSidebar = () => {
    return (

        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            // collapsible
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[UserOutlined].map(
                    (icon, index) => ({
                        key: String(index + 1),
                        icon: React.createElement(icon),
                        label: `User`,
                    }),
                )}
            />
        </Sider>

    );
}

export default CustomSidebar;