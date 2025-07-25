import React from 'react';
import styles from './AboutPage.module.css';

import { AboutHero } from './sections/AboutHero';
import { AboutOverview } from './sections/AboutOverview';
import { AboutStats } from './sections/AboutStats';
import { AboutMissionVision } from './sections/AboutMissionVision';
import { AboutCEO } from './sections/AboutCEO';
import { AboutTeam } from './sections/AboutTeam';
import { BookingForm } from '../../components/common/BookingForm/BookingForm';


export const AboutPage = () => (
  <div className={styles.aboutPage}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
    <AboutHero />
    <AboutOverview />
    <AboutStats />
    <AboutCEO />
    <AboutMissionVision />
    <AboutTeam />
    <BookingForm />
    </div>
  </div>
);
