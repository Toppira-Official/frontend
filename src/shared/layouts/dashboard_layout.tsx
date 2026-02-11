import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

const { Header: AntHeader, Sider, Content } = Layout;

export const DashboardLayout: React.FC = () => {
  return (
    <Layout className="min-h-screen bg-slate-50">
      <AntHeader className="flex items-center justify-between bg-white px-6 shadow-sm">
        <h1 className="text-xl font-semibold">تاپیرا - داشبورد</h1>
      </AntHeader>
      <Layout>
        <Sider
          width={240}
          className="hidden bg-white shadow-sm lg:block"
          breakpoint="lg"
        />
        <Content className="p-4 lg:p-8">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
