import React, {useEffect, useState} from 'react';
import "../css/LayoutView.css"
import {Layout, Menu, theme} from 'antd';
import {Outlet, useLocation} from "react-router";
import {Link} from "react-router-dom";

const {Header, Content} = Layout;
const label: string[] = ["首页", "电影", "影院"];
const item = label.map((_, index) => {
    const url = ["home", "film", "cinema"];
    return {
        key: index + 1,
        label: (
            <Link to={"/ticketBooking/" + url[index]}>
                {label[index]}
            </Link>
        ),
    };
});

export function LayoutView() {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    useEffect(() => {
        const newDefaultSelectedKeys: string[] = [];
        const pathname = location.pathname;
        const url = ["home", "film", "cinema"];
        url.forEach((urlKeyWord: string, index: number) => {
            if (pathname.includes(urlKeyWord)) newDefaultSelectedKeys.push((index + 1).toString());
        })
        setSelectedKeys(newDefaultSelectedKeys);
    }, [location, location.pathname]);

    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultOpenKeys={["1"]}
                    defaultSelectedKeys={["1"]}
                    selectedKeys={selectedKeys}
                    items={item}
                />
            </Header>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content" style={{
                    background: colorBgContainer,
                    display: "flex",
                    flexFlow: "column",
                }}>
                    <Outlet/>
                </div>
            </Content>
        </Layout>
    );
}

