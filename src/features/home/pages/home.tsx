import React from 'react';

import { Faq } from '../components/faq.tsx';
import { Hero } from '../components/hero.tsx';
import { RememberEffortlessly } from '../components/remember_effortlessly.tsx';
import { ReminderModes } from '../components/reminder_modes.tsx';
import { SimplifyLife } from '../components/simplify_life.tsx';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ReminderModes />
      <SimplifyLife />
      <RememberEffortlessly />
      <Faq />
    </>
  );
};
