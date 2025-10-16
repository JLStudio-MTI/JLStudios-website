import { useState } from "react";
import { X } from "lucide-react";
import portfolioCafe from "@/assets/portfolio-cafe.jpg";
import portfolioGym from "@/assets/portfolio-gym.jpg";
import portfolioDentist from "@/assets/portfolio-dentist.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";

interface PortfolioProps {
  currentLang: string;
}

const Portfolio = ({ currentLang }: PortfolioProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const content = {
    en: {
      title: "Portfolio",
      subtitle: "Real results for real businesses",
      projects: [
        {
          image: portfolioCafe,
          title: "Cozy Café Website",
          niche: "Café",
          result: "↑ 40% online orders",
        },
        {
          image: portfolioGym,
          title: "Fitness Gym Site",
          niche: "Gym",
          result: "↑ 60% new memberships",
        },
        {
          image: portfolioDentist,
          title: "Dental Clinic",
          niche: "Dentist",
          result: "↑ 50% bookings",
        },
        {
          image: portfolioRestaurant,
          title: "Fine Dining Restaurant",
          niche: "Restaurant",
          result: "↑ 35% reservations",
        },
      ],
    },
    es: {
      title: "Portafolio",
      subtitle: "Resultados reales para negocios reales",
      projects: [
        {
          image: portfolioCafe,
          title: "Sitio Web de Café",
          niche: "Café",
          result: "↑ 40% pedidos online",
        },
        {
          image: portfolioGym,
          title: "Sitio de Gimnasio",
          niche: "Gimnasio",
          result: "↑ 60% nuevos miembros",
        },
        {
          image: portfolioDentist,
          title: "Clínica Dental",
          niche: "Dentista",
          result: "↑ 50% reservas",
        },
        {
          image: portfolioRestaurant,
          title: "Restaurante Gourmet",
          niche: "Restaurante",
          result: "↑ 35% reservaciones",
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {t.projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-medium hover:shadow-large transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-cyan">{project.result}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                  {project.niche}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Portfolio preview"
              className="max-w-full max-h-full rounded-lg shadow-large"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
