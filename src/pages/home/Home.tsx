import React from "react";
import {Breadcrumb, theme} from "antd";

const Home: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                home test
            </div>
        </div>
    )
}

export default Home