import { Button } from "@/components/ui/button";
import { Check, Clock, FileText, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-mockup.jpg";

interface HeroProps {
  currentLang: string;
}

const Hero = ({ currentLang }: HeroProps) => {
  const content = {
    en: {
      headline: "Websites in 48 hours for small businesses.",
      subheadline: "Launch fast, look professional, and start getting customers this week.",
      ctaWhatsApp: "WhatsApp Us",
      ctaMockup: "Get a Free Mockup",
      trust: [
        { icon: Clock, text: "48-hour delivery" },
        { icon: FileText, text: "Free homepage mockup" },
        { icon: Check, text: "Hosting & setup help" },
        { icon: Smartphone, text: "100% responsive" },
      ],
    },
    es: {
      headline: "Sitios web en 48 horas para negocios pequeños.",
      subheadline: "Lanza rápido, luce profesional y empieza a conseguir clientes esta semana.",
      ctaWhatsApp: "Escríbenos por WhatsApp",
      ctaMockup: "Pide un Mockup Gratis",
      trust: [
        { icon: Clock, text: "Entrega en 48 horas" },
        { icon: FileText, text: "Mockup gratis" },
        { icon: Check, text: "Ayuda con hosting" },
        { icon: Smartphone, text: "100% responsive" },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.subheadline}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="text-base px-8 shadow-medium hover:shadow-large transition-all hover:scale-105"
                asChild
              >
                <a
                  href="https://wa.me/YOUR_NUMBER?text=Hi%20JLStudios%2C%20I'd%20like%20a%20website%20in%2048%20hours"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.ctaWhatsApp}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-2 hover:border-accent hover:text-accent transition-all"
                asChild
              >
                <a href="#contact">{t.ctaMockup}</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.trust.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all hover:shadow-soft"
                >
                  <item.icon className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-cyan/20 rounded-3xl blur-2xl"></div>
              <img
                src={heroImage}
                alt="Professional website mockups on laptop and smartphone"
                className="relative rounded-2xl shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
