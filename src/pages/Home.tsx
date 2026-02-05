import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { EducationalProposal } from '../components/EducationalProposal';
import { Programs } from '../components/Programs';
import { Contact } from '../components/Contact';

export function Home() {
  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll a esa sección
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Hero />
      <EducationalProposal />
      <Programs />
      <Contact />
    </>
  );
}