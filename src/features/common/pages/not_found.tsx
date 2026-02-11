import { Button, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

import NotFoundImage from '../../../assets/not_found.webp';

const { Title, Paragraph } = Typography;

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <section dir="rtl" className="not-found-section">
      <div className="container">
        <div className="not-found-wrapper">
          <div className="not-found-image-wrapper">
            <img
              src={NotFoundImage}
              alt="صفحه‌ای که پیدا نشد"
              className="not-found-image"
            />
          </div>

          <Title
            level={2}
            className="not-found-title mb-3! text-center! text-3xl! font-black! sm:text-4xl!"
          >
            صفحه‌ای که دنبالش بودی پیدا نشد!
          </Title>

          <Paragraph className="not-found-text mb-6! text-center! text-sm! leading-7! text-gray-600 sm:text-base!">
            احتمالاً آدرس را اشتباه وارد کردی یا این صفحه دیگر وجود ندارد. نگران
            نباش، می‌توانی به صفحه اصلی برگردی و از آنجا ادامه بدهی.
          </Paragraph>

          <Button
            type="primary"
            size="large"
            className="rounded-full! px-8! py-4!"
            onClick={handleBackHome}
          >
            برگشت به صفحه اصلی
          </Button>
        </div>
      </div>
    </section>
  );
};
