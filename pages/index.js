import NavBar from '../components/section/NavBar';
import Hero from '../components/section/Hero';
import AboutSection from '../components/section/AboutSection';
import FeatureSection from '../components/section/FeatureSection';
import ProductSection from '../components/section/ProductSection';
import ContactSection from '../components/section/ContactSection';
import Footer from '../components/section/Footer';

export default function Home() {
  return (
    <div >
      <NavBar />
      <Hero />
      <AboutSection />
      <FeatureSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
};