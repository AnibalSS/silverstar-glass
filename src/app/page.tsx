'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
