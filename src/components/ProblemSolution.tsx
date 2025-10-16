import { XCircle, CheckCircle } from "lucide-react";

interface ProblemSolutionProps {
  currentLang: string;
}

const ProblemSolution = ({ currentLang }: ProblemSolutionProps) => {
  const content = {
    en: {
      title: "Why JLStudios?",
      problems: [
        "No website = invisible online",
        "Freelancers take weeks or months",
        "DIY builders are confusing and time-consuming",
      ],
      solutions: [
        "Live in 48 hours with a professional site",
        "Guided process from start to finish",
        "All-inclusive setup: domain, hosting, SSL",
      ],
    },
    es: {
      title: "¿Por qué JLStudios?",
      problems: [
        "Sin sitio web = invisible en línea",
        "Los freelancers tardan semanas o meses",
        "Los creadores DIY son confusos y tardan mucho",
      ],
      solutions: [
        "En línea en 48 horas con un sitio profesional",
        "Proceso guiado de principio a fin",
        "Setup completo: dominio, hosting, SSL",
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Problems */}
          <div className="space-y-6">
            {t.problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-background rounded-lg border border-destructive/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            {t.solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.15}s` }}
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
