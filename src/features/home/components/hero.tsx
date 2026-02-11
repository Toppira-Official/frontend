import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

import HeroImage from '../../../assets/images/hero.webp';

const { Title, Paragraph, Text } = Typography;

export const Hero: React.FC = () => {
  return (
    <section dir="rtl" className="bg-white py-16">
      <div className="container">
        <Row
          gutter={[
            { xs: 16, md: 32 },
            { xs: 16, md: 48 },
          ]}
          align="middle"
          justify="space-between"
        >
          <Col
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}
            className="text-center md:text-right"
          >
            <div className="flex w-full flex-col items-center md:items-start">
              <Text className="hero-text mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
                فراموشی؟ دیگه نه
              </Text>

              <Title
                level={1}
                className="hero-text mt-2! text-3xl! leading-snug! font-black! sm:text-4xl! md:text-5xl!"
              >
                برای هر کاری یه یادآور بساز.
              </Title>

              <Paragraph className="hero-text mt-4! text-sm! leading-8! text-gray-600 sm:text-base!">
                تکرارش کن، شخصی‌سازیش کن و بذار تاپیرا حواسش به همه‌چیز باشه. تو
                فقط کارهاتو بنویس، ما حواسمون به زمانش هست.
              </Paragraph>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <Button
                  type="primary"
                  size="large"
                  className="rounded-full! px-8! py-4! text-base!"
                >
                  رایگان شروع کن
                </Button>

                <Button
                  type="default"
                  size="large"
                  className="rounded-full! border-none! px-6! py-4! text-base! shadow-none!"
                >
                  دیدن امکانات
                </Button>
              </div>
            </div>
          </Col>

          <Col
            xs={{ span: 24, order: 2 }}
            md={{ span: 12, order: 2 }}
            className="mb-4 md:mb-0"
          >
            <div className="relative flex w-full justify-center">
              <img
                src={HeroImage}
                alt="نمایی از اپلیکیشن مدیریت کارهای تاپیرا"
                className="w-full max-w-xs rounded-3xl shadow-2xl sm:max-w-sm md:max-w-md"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
