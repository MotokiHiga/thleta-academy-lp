import { Toaster } from './components/ui/sonner';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoachProfile } from './components/CoachProfile';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import SummerCampPopup from './components/SummerCampPopup';

export default function App() {
  return (
    <div className="min-h-screen">
    <LanguageSwitcher />
    <SummerCampPopup />
      <Hero />
      <About />
      <CoachProfile />
      <Programs />
      <Testimonials />
      <FAQ />
      <ApplicationForm />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
