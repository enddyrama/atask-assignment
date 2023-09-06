
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageDashboard, PageUserDetail } from '../pages';
import Sider from 'antd/es/layout/Sider';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import CustomSidebar from '../components/section/sidebar';

const AppRouter = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (

        <Layout style={{ minHeight: `100vh` }}>
            <CustomSidebar />
            <Layout>
                {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
                <Content style={{ margin: '20px' }}>
                    <PageDashboard />
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<PageDashboard />} />
                            <Route path="/detail" element={<PageUserDetail />} />
                        </Routes>
                    </BrowserRouter> */}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Atask Assignment ©2023 Created by Matt Jambrong</Footer>
            </Layout>
        </Layout>

    );
}

export default AppRouter;