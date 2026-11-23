import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { EditorialIntro } from './components/home/EditorialIntro';
import { ExperiencesSection } from './components/home/ExperiencesSection';
import { PackagesSection } from './components/home/PackagesSection';
import { WhyChooseUsSection } from './components/home/WhyChooseUsSection';
import { DestinationSection } from './components/home/DestinationSection';
import { GallerySection } from './components/home/GallerySection';
import { ContactSection } from './components/home/ContactSection';
import { Footer } from './components/common/Footer';
import { FloatingControls } from './components/common/FloatingControls';
import { BookingModal } from './components/common/BookingModal';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSafariForModal, setSelectedSafariForModal] = useState('Leopard Safari');

  const handleOpenBookingModal = (safariTitle?: string) => {
    if (safariTitle) {
      setSelectedSafariForModal(safariTitle);
    }
    setIsBookingModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-jawai-bg text-jawai-text selection:bg-jawai-amber selection:text-white">
      {/* Fixed Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreSafaris={() => scrollToSection('experiences')}
          onDiscoverJawai={() => scrollToSection('about')}
        />

        {/* Editorial Introduction */}
        <EditorialIntro />

        {/* Safari Experiences */}
        <ExperiencesSection
          onSelectExperience={(title) => handleOpenBookingModal(title)}
        />

        {/* Safari Packages */}
        <PackagesSection />

        {/* Why Choose Us */}
        <WhyChooseUsSection onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Destination Storytelling */}
        <DestinationSection />

        {/* Immersive Gallery */}
        <GallerySection />

        {/* Contact & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Controls (WhatsApp, Call, Scroll Top) */}
      <FloatingControls />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultSafari={selectedSafariForModal}
      />
    </div>
  );
}

export default App;
