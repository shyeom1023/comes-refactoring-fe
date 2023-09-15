import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Sider} = Layout;

interface Menu {
    label: string,
    key: string,
    path?: string | null,
    icon?: string | null,
    children?: Menu[]
}

const AppSide: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const getItem = (
        label: React.ReactNode,
        key: React.Key,
        path: string | null,
        icon?: React.ReactNode,
        children?: Menu[]
    ): Menu => {
        return {
            label,
            key,
            icon,
            path,
            children
        } as Menu;
    }

    const items: Menu[] = [
        getItem('Home', '1', '/home', <PieChartOutlined/>),
        getItem('About', '2', '/about', <DesktopOutlined/>),
        getItem('User', 'sub1', null, <UserOutlined/>, [
            getItem('Tom', '3', null),
            getItem('Bill', '4', null),
            getItem('Alex', '5', null),
        ]),
        getItem('Team', 'sub2', null, <TeamOutlined/>, [
            getItem('Team 1', '6', null, null, [
                getItem('Team 1-1', '7', null)
            ]),
            getItem('Team 2', '8', null)
        ]),
        getItem('Files', '9', null, <FileOutlined/>),
    ];

    const getMenuItems = (items: Menu[]) => {
        return items.map((item) => {
            if (item.children) {
                return (
                    <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                        {getMenuItems(item.children)}
                    </Menu.SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                        {item.path && <Link to={item.path}/>}
                    </Menu.Item>
                );
            }
        });
    };

    return (
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                {getMenuItems(items)}
            </Menu>
        </Sider>
    );
}

export default AppSide;
