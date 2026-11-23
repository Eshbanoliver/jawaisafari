import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingControls } from './components/common/FloatingControls';
import { BookingModal } from './components/common/BookingModal';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { PackagesPage } from './pages/PackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSafariForModal, setSelectedSafariForModal] = useState('Leopard Safari');

  const handleOpenBookingModal = (safariTitle?: string) => {
    if (safariTitle) {
      setSelectedSafariForModal(safariTitle);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-jawai-bg text-jawai-text selection:bg-jawai-amber selection:text-white flex flex-col justify-between">
        {/* Fixed Navigation Capsule */}
        <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBookingModal={handleOpenBookingModal} />} />
            <Route path="/about" element={<AboutPage onOpenBookingModal={() => handleOpenBookingModal()} />} />
            <Route path="/experiences" element={<ExperiencesPage onOpenBookingModal={handleOpenBookingModal} />} />
            <Route path="/packages" element={<PackagesPage onOpenBookingModal={handleOpenBookingModal} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Floating Controls (WhatsApp, Call, Scroll Top) */}
        <FloatingControls />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          defaultSafari={selectedSafariForModal}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
