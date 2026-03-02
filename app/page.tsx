import ServicesSection from "@/components/ServiceSession";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/whyChooseus";
import ContactSection from "@/components/Contactus";
export default function Home() {
  return (
    <div>
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}
