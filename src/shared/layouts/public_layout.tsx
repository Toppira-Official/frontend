import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

import { Footer } from '../components/footer.tsx';
import { Header } from '../components/header.tsx';

const { Content } = Layout;

export const PublicLayout: React.FC = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
