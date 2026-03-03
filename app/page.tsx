import ServicesSection from "@/components/ServiceSession";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/whyChooseus";
import ContactSection from "@/components/Contactus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
}
