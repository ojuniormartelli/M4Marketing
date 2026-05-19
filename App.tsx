import React, { useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import PainSection from './components/PainSection.tsx';
import { Features } from './components/Features.tsx';
import { Proof } from './components/Proof.tsx';
import Services from './components/Services.tsx';
import { Pricing } from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQSection from './components/FAQSection.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

import CTA from './components/CTA.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainSection />
        <Features />
        <Proof />
        <div id="methodology">
          <Services />
        </div>
        <CTA />
        <Testimonials />
        <FAQSection />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;