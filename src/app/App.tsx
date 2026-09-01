import { Toaster } from './components/ui/sonner';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoachProfile } from './components/CoachProfile';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ApplicationForm } from './components/ApplicationForm';
import { SummerClinicCallout } from './components/SummerClinicCallout';
import { Footer } from './components/Footer';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { SummerClinicBanner } from './components/SummerClinicBanner';

export default function App() {
  return (
    <div className="min-h-screen">
    <LanguageSwitcher />
      <SummerClinicBanner />
      <Hero />
      <About />
      <CoachProfile />
      <Programs />
      <Testimonials />
      <FAQ />
      <SummerClinicCallout />
      <ApplicationForm />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
