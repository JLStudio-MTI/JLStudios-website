import { FileText, Pencil, Code, Rocket } from "lucide-react";

interface ProcessProps {
  currentLang: string;
}

const Process = ({ currentLang }: ProcessProps) => {
  const content = {
    en: {
      title: "Our 48-Hour Process",
      subtitle: "From brief to live website in just 2 days",
      steps: [
        {
          icon: FileText,
          day: "Day 0",
          title: "Brief & Assets",
          description: "Share your brand info, goals, and any content you have",
        },
        {
          icon: Pencil,
          day: "Day 1",
          title: "Mockup & Feedback",
          description: "Review your homepage design and request changes",
        },
        {
          icon: Code,
          day: "Day 2",
          title: "Build & Connect",
          description: "We build the full site and set up your domain",
        },
        {
          icon: Rocket,
          day: "Launch",
          title: "Go Live",
          description: "Your professional website is live and ready for customers",
        },
      ],
    },
    es: {
      title: "Nuestro Proceso de 48 Horas",
      subtitle: "Del brief al sitio en vivo en solo 2 días",
      steps: [
        {
          icon: FileText,
          day: "Día 0",
          title: "Brief y Assets",
          description: "Comparte info de tu marca, objetivos y contenido",
        },
        {
          icon: Pencil,
          day: "Día 1",
          title: "Mockup y Feedback",
          description: "Revisa el diseño y solicita cambios",
        },
        {
          icon: Code,
          day: "Día 2",
          title: "Construir y Conectar",
          description: "Construimos el sitio y configuramos tu dominio",
        },
        {
          icon: Rocket,
          day: "Lanzamiento",
          title: "En Vivo",
          description: "Tu sitio profesional está listo para clientes",
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {t.steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center animate-slide-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card border-2 border-border hover:border-accent/50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all">
                      <div className="text-sm font-semibold text-accent mb-2">{step.day}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-medium">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
