import { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import CardV from '../../components/Card-Vertical/Card-Vertical';
import Button from '../../components/Button/Button';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import Team1 from '../../assets/icons/profile.svg';
import Team2 from '../../assets/icons/profile.svg';
import Team3 from '../../assets/icons/profile.svg';

import {
  GlobeAsiaAustraliaIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import HeroSection from '../../sections/HeroSection/HeroSection';
import BrandSection from '../../sections/Brand/BrandSection';
import aboutHeroImage from '../../assets/images/Features/Features_3.svg';
import FAQ from '../../sections/FAQ/FAQ';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const values = [
    {
      icon: GlobeAsiaAustraliaIcon,
      title: 'Sustainability',
      text: 'We care for the planet and communities we visit.',
    },
    {
      icon: HandThumbUpIcon,
      title: 'Trust',
      text: 'We build lasting relationships with honesty and transparency.',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      text: 'We constantly evolve to create unique travel experiences.',
    },
    {
      icon: UserIcon,
      title: 'Customer First',
      text: 'Your happiness is our top priority.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <MainLayout
      hero={
        <HeroSection
          imageUrl={aboutHeroImage}
          title="About Tribtel"
          subtitle="Discover our journey, values, and the passionate team behind unforgettable travel experiences."
          showCTA={false}
        />
      }
    >
      <div className={styles.breadCrumb}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      </div>

      <BrandSection />
      {/* Story + Values Split Section */}
      <section className={`${styles.splitSection} mb40`}>
        {/* Story Section - left side */}
        <div className={styles.storySection}>
          <h2 className="mb16">Our Story</h2>
          <p>
            Founded in 2010, we’ve been helping travelers discover unforgettable experiences across
            the globe.
          </p>
        </div>

        {/* Values Section - right side */}
        <div className={styles.valuesSection}>
          <h2 className="mb24">Our Values</h2>
          <div className={styles.valuesSlideshow}>
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className={`${styles.valueCard} ${i === activeIndex ? styles.active : ''}`}
                >
                  <Icon className="w-10 h-10 mb16 text-purple-700" />
                  <h3 className="mb8">{val.title}</h3>
                  <p>{val.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.teamSection} mb40`}>
        <h2 className="mb24">Meet the Team</h2>
        <div className="grid grid-auto gap-24">
          <CardV title="Jane Doe" description="Founder & CEO" imageUrl={Team1}>
            <Button className="mt16" variant="secondary">
              Connect
            </Button>
          </CardV>
          <CardV title="John Smith" description="Head of Operations" imageUrl={Team2}>
            <Button className="mt16" variant="secondary">
              Connect
            </Button>
          </CardV>
          <CardV title="Sarah Lee" description="Travel Consultant" imageUrl={Team3}>
            <Button className="mt16" variant="secondary">
              Connect
            </Button>
          </CardV>
        </div>
      </section>
      <FAQ />
    </MainLayout>
  );
}
