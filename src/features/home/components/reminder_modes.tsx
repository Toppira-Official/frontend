import { Col, Row, Segmented, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

type ReminderMode = 'location' | 'one-time' | 'repeat';

const reminderContent: Record<
  ReminderMode,
  {
    title: string;
    description: string;
  }
> = {
  'one-time': {
    title: 'بیشتر انجام بده. کمتر فراموش کن.',
    description:
      'با چند لمس ساده یادآور بساز و دقیق سر وقت مطلع شو. جلسه کاری یا کار شخصی؟ همه‌چیز یک‌جا و تحت کنترل توئه.',
  },
  repeat: {
    title: 'کارهای تکراری، بدون فراموشی',
    description:
      'روزانه، هفتگی یا ماهانه تنظیمش کن. قبض‌ها، ورزش، پیگیری پروژه‌ها — همیشه سر وقت.',
  },
  location: {
    title: 'برسی، یادآوری میشه. همینقدر ساده.',
    description:
      'لوکیشن رو مشخص کن، بقیه‌ش با ما. کار درست، دقیقاً در جای درست.',
  },
};

export const ReminderModes: React.FC = () => {
  const [mode, setMode] = React.useState<ReminderMode>('one-time');

  const current = reminderContent[mode];

  return (
    <section dir="rtl" className="reminder-section">
      <div className="container">
        <Row justify="center">
          <Col xs={24} md={20} lg={14}>
            <div className="reminder-content">
              <div className="mb-6 flex w-full justify-center">
                <Segmented
                  className="reminder-segmented"
                  size="large"
                  value={mode}
                  onChange={(value) => setMode(value as ReminderMode)}
                  options={[
                    { label: 'یک‌بار', value: 'one-time' },
                    { label: 'تکرار', value: 'repeat' },
                    { label: 'بر اساس مکان', value: 'location' },
                  ]}
                />
              </div>

              <Title
                level={2}
                className="reminder-title mb-3! text-center! text-3xl! leading-snug! sm:text-4xl!"
              >
                {current.title}
              </Title>

              <Paragraph className="reminder-description mb-0! text-center! text-sm! leading-8! text-gray-600 sm:text-base!">
                {current.description}
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
