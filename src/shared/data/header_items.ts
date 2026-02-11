import type { HeaderItem } from '../types/header_item';

export const HeaderItems: HeaderItem[] = [
  {
    title: 'خانه',
    link: '/',
  },
  {
    title: 'امکانات',
    link: '/features',
  },
  {
    title: 'قیمت‌گذاری',
    link: '/pricing',
  },
  {
    title: 'منابع',
    items: [
      {
        title: 'وبلاگ',
        link: '/blog',
      },
      {
        title: 'مرکز راهنما',
        link: '/help-center',
      },
      {
        title: 'سؤالات متداول',
        link: '/faq',
      },
    ],
  },
  {
    title: 'درباره ما',
    link: '/about',
  },
  {
    title: 'تماس',
    link: '/contact',
  },
];
