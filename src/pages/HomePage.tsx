import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { EditorialIntro } from '../components/home/EditorialIntro';
import { ExperiencesSection } from '../components/home/ExperiencesSection';
import { PackagesSection } from '../components/home/PackagesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { DestinationSection } from '../components/home/DestinationSection';
import { GallerySection } from '../components/home/GallerySection';
import { ContactSection } from '../components/home/ContactSection';

interface HomePageProps {
  onOpenBookingModal: (safariTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 5-Image Hero Slider */}
      <HeroSection
        onExploreSafaris={() => scrollToSection('experiences')}
        onDiscoverJawai={() => scrollToSection('about')}
      />

      {/* Editorial Introduction */}
      <EditorialIntro />

      {/* Safari Experiences */}
      <ExperiencesSection onSelectExperience={(title) => onOpenBookingModal(title)} />

      {/* Safari Packages */}
      <PackagesSection />

      {/* The Jawai Safari Hub Difference (Interactive Showcase) */}
      <WhyChooseUsSection onOpenBookingModal={() => onOpenBookingModal()} />

      {/* Destination Storytelling */}
      <DestinationSection />

      {/* Wildlife Gallery */}
      <GallerySection />

      {/* Reservations & Inquiries Studio */}
      <ContactSection />
    </>
  );
};
