import { Col, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text, Link } = Typography;

export const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className="site-footer">
      <div className="container">
        <Row
          gutter={[
            { xs: 16, md: 32 },
            { xs: 24, md: 32 },
          ]}
        >
          <Col xs={24} md={6}>
            <div className="footer-column">
              <Title level={5} className="footer-heading">
                تاپیرا
              </Title>
              <Link className="footer-link">درباره تاپیرا</Link>
              <Link className="footer-link">فرصت‌های شغلی</Link>
              <Link className="footer-link">تماس با ما</Link>
            </div>
          </Col>

          <Col xs={24} md={6}>
            <div className="footer-column">
              <Title level={5} className="footer-heading">
                منابع
              </Title>
              <Link className="footer-link">مرکز راهنما</Link>
              <Link className="footer-link">وبلاگ</Link>
              <Link className="footer-link">شرایط و حریم خصوصی</Link>
            </div>
          </Col>

          <Col xs={24} md={6}>
            <div className="footer-column">
              <Title level={5} className="footer-heading">
                راه‌های استفاده
              </Title>
              <Link className="footer-link">مدیریت کارهای شخصی</Link>
              <Link className="footer-link">پیگیری پروژه‌ها</Link>
              <Link className="footer-link">یادآورهای تیمی</Link>
            </div>
          </Col>

          <Col xs={24} md={6}>
            <div className="footer-column">
              <Title level={5} className="footer-heading">
                دانلود اپلیکیشن
              </Title>
              <Text className="footer-link">به‌زودی روی iOS و Android</Text>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom border-t border-gray-200" dir="ltr">
          <Text className="footer-copy font-operator-mono! text-sm! font-bold!">
            <span className="text-lg">©</span> 2026 Developed By Toppira Team
            With ❤️
          </Text>
        </div>
      </div>
    </footer>
  );
};
