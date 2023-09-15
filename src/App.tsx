import React, {useState} from 'react';
import AppRouter from './routes/AppRouter';
import {BrowserRouter} from "react-router-dom";
import {Breadcrumb, Layout, theme} from 'antd';
import AppHeader from "./components/header/AppHeader";
import AppSide from "./components/sider/AppSide";
import {useRecoilValue} from "recoil";
import {isAuthenticatedState} from "./recoil/userAtoms";
import Login from "./pages/auth/Login";

const {Content, Footer} = Layout;


const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const isAuthenticated = useRecoilValue(isAuthenticatedState)

    return (
        <BrowserRouter>
            {isAuthenticated ? <Login/> :
                <Layout style={{minHeight: '100vh'}}>
                    <AppHeader colorBgContainer={colorBgContainer}/>
                    <Layout>
                        <AppSide/>
                        <Layout>
                            <Content style={{margin: '0 16px'}}>
                                <Breadcrumb style={{margin: '16px 0'}}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <AppRouter/>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            }
        </BrowserRouter>
    );
};

export default App;
