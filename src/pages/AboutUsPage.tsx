import { useEffect } from 'react';
import { AboutUs } from '../components/AboutUs';

export function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutUs />
    </div>
  );
}