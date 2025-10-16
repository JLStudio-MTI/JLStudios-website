import { Mail, MessageCircle } from "lucide-react";

interface FooterProps {
  currentLang: string;
}

const Footer = ({ currentLang }: FooterProps) => {
  const content = {
    en: {
      email: "hello@jlstudios.com",
      whatsapp: "WhatsApp",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© 2025 JLStudios. All rights reserved.",
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        pricing: "Pricing",
        contact: "Contact",
      },
    },
    es: {
      email: "hola@jlstudios.com",
      whatsapp: "WhatsApp",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      copyright: "© 2025 JLStudios. Todos los derechos reservados.",
      nav: {
        home: "Inicio",
        services: "Servicios",
        portfolio: "Portafolio",
        pricing: "Precios",
        contact: "Contacto",
      },
    },
  };

  const t = content[currentLang as keyof typeof content];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">JLStudios</h3>
            <p className="text-primary-foreground/80 mb-4">
              {currentLang === "en"
                ? "Professional websites in 48 hours for small businesses."
                : "Sitios web profesionales en 48 horas para pequeños negocios."}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.email}
              </a>
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-cyan transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {currentLang === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h4>
            <ul className="space-y-2">
              {Object.entries(t.nav).map(([key, label]) => (
                <li key={key}>
                  <a
                    href={`#${key === "home" ? "home" : key}`}
                    onClick={(e) => scrollToSection(e, `#${key === "home" ? "home" : key}`)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">
              {currentLang === "en" ? "Legal" : "Legal"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
