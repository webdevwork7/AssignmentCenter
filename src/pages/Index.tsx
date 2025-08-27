import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestAssignmentHelp from "@/components/BestAssignmentHelp";
// import DiscountSection from '@/components/DiscountSection';
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import WorldMap from "@/components/WorldMap";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatIsAssignmentsCenter from "@/components/WhatIsAssignmentsCenter";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BestAssignmentHelp />
      <WhatIsAssignmentsCenter />
      <WhyChooseUs />
      <HowItWorks />
      <WorldMap />
      <SuccessStories />
      <Testimonials />
      <StatsSection />
      <Services />
      <ContactCTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
