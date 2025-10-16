import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentLang={currentLang} onLanguageToggle={toggleLanguage} />
      <main>
        <Hero currentLang={currentLang} />
        <ProblemSolution currentLang={currentLang} />
        <Services currentLang={currentLang} />
        <Portfolio currentLang={currentLang} />
        <Pricing currentLang={currentLang} />
        <Process currentLang={currentLang} />
        <Testimonials currentLang={currentLang} />
        <FAQ currentLang={currentLang} />
        <About currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
