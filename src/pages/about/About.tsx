import React from 'react';
import {theme} from "antd";

const About: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
            about test
        </div>
    )
};

export default About;