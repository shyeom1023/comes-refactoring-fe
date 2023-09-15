import React from 'react';
import {Layout, Avatar} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const {Header} = Layout;

const lightGray = '#d3d3d3'; // 옅은 회색 선의 색상

interface AppHeaderProps {
    colorBgContainer: string; // colorBgContainer의 형식을 지정
}

const AppHeader: React.FC<AppHeaderProps> = ({colorBgContainer}) => {
    return (
        <Header style={{
            padding: '0 16px', // 필요에 따라 padding 조정
            height: '50px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${lightGray}`, // 옅은 회색 선 추가
        }}>
            <div style={{width: '160px', textAlign: 'center'}}>
                <h2>Intranet</h2>
            </div>

            {/* 로그인 아바타 */}
            <div>
                Welcome <Avatar icon={<UserOutlined/>}/>
            </div>
        </Header>
    );
}

export default AppHeader;
