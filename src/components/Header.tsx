import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentLang: string;
  onLanguageToggle: () => void;
}

const Header = ({ currentLang, onLanguageToggle }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", labelEN: "Home", labelES: "Inicio" },
    { href: "#services", labelEN: "Services", labelES: "Servicios" },
    { href: "#portfolio", labelEN: "Portfolio", labelES: "Portafolio" },
    { href: "#pricing", labelEN: "Pricing", labelES: "Precios" },
    { href: "#faqs", labelEN: "FAQs", labelES: "Preguntas" },
    { href: "#about", labelEN: "About", labelES: "Nosotros" },
    { href: "#contact", labelEN: "Contact", labelES: "Contacto" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-primary">
            JLStudios
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {currentLang === "en" ? link.labelEN : link.labelES}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onLanguageToggle}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {currentLang === "en" ? "ES" : "EN"}
            </button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="https://wa.me/YOUR_NUMBER?text=Hi%20JLStudios%2C%20I'd%20like%20a%20website%20in%2048%20hours"
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentLang === "en" ? "WhatsApp Us" : "Escríbenos"}
              </a>
            </Button>
            <Button
              size="sm"
              asChild
            >
              <a href="#contact">
                {currentLang === "en" ? "Get a Free Mockup" : "Mockup Gratis"}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onLanguageToggle}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
            >
              {currentLang === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {currentLang === "en" ? link.labelEN : link.labelES}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a
                    href="https://wa.me/YOUR_NUMBER?text=Hi%20JLStudios%2C%20I'd%20like%20a%20website%20in%2048%20hours"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {currentLang === "en" ? "WhatsApp Us" : "Escríbenos"}
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a href="#contact">
                    {currentLang === "en" ? "Get a Free Mockup" : "Mockup Gratis"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
