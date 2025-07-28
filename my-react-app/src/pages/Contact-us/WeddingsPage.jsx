import React from 'react';
import styles from './WeddingsPage.module.css';

import { WeddingHero } from './sections/WeddingHero';
import { WeddingOverview } from './sections/WeddingOverview';
import { WeddingPackages } from './sections/WeddingPackage';
import { BookingForm } from '../../components/common/BookingForm/BookingForm';


export const WeddingsPage = () => (
  <div className={styles.weddingsPage}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
    <WeddingHero />
    <WeddingOverview />
    <WeddingPackages/>
    <BookingForm />
    </div>
  </div>
);