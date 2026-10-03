/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FlowerGallery } from './components/FlowerGallery';
import { FlowerInformation } from './components/FlowerInformation';
import { FlowerCategories } from './components/FlowerCategories';
import { CareGuideSection } from './components/CareGuideSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FlowerDetailsModal } from './components/FlowerDetailsModal';
import { Flower, FLOWERS } from './data/flowers';

export default function App() {
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);
  const [careGuideFlowerId, setCareGuideFlowerId] = useState<string>('rose');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // When a category card is clicked in the categories section
  const handleSelectCategoryFromSection = (categoryName: string) => {
    setActiveCategoryFilter(categoryName);
    scrollToSection('gallery');
  };

  // Open care guide directly with a selected flower from modal
  const handleOpenCareGuideFromModal = (flowerId: string) => {
    setCareGuideFlowerId(flowerId);
    scrollToSection('care-guide');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 flex flex-col font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Modern Fixed Navigation Bar */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExplore={() => scrollToSection('gallery')}
          onCareGuide={() => scrollToSection('care-guide')}
          onSelectFlower={(flowerId) => {
            const found = FLOWERS.find((f) => f.id === flowerId);
            if (found) setSelectedFlower(found);
          }}
        />

        {/* 2. Curated Flower Gallery */}
        <FlowerGallery
          onSelectFlower={(flower) => setSelectedFlower(flower)}
          selectedCategoryFilter={activeCategoryFilter}
          onClearCategoryFilter={() => setActiveCategoryFilter(null)}
        />

        {/* 3. Flower Importance & Botanical Science */}
        <FlowerInformation />

        {/* 4. Flower Categories */}
        <FlowerCategories
          onSelectCategory={handleSelectCategoryFromSection}
        />

        {/* 5. Flower Care Guide */}
        <CareGuideSection
          initialSelectedFlowerId={careGuideFlowerId}
        />

        {/* 6. About Us */}
        <AboutUsSection />

        {/* 7. Contact Page */}
        <ContactSection />
      </main>

      {/* 8. Interactive Flower Details Modal */}
      <FlowerDetailsModal
        flower={selectedFlower}
        onClose={() => setSelectedFlower(null)}
        onOpenCareGuide={handleOpenCareGuideFromModal}
      />

      {/* 9. Modern Floral Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
