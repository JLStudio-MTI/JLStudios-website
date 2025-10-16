import { MapPin } from "lucide-react";

interface AboutProps {
  currentLang: string;
}

const About = ({ currentLang }: AboutProps) => {
  const content = {
    en: {
      title: "About JLStudios",
      paragraphs: [
        "We're a web design studio dedicated to helping small businesses get online fast. Based in San Miguel de Allende, Mexico, we work with local and remote clients worldwide.",
        "Our mission is simple: make professional web design accessible, affordable, and stress-free. No confusing tech talk, no endless revisions, no months of waiting. Just beautiful websites that help you grow your business.",
        "Whether you run a café, gym, clinic, or shop, we understand your needs and deliver websites that actually drive results.",
      ],
      location: "Serving San Miguel de Allende, MX & remote clients worldwide",
    },
    es: {
      title: "Sobre JLStudios",
      paragraphs: [
        "Somos un estudio de diseño web dedicado a ayudar a pequeños negocios a estar en línea rápido. Basados en San Miguel de Allende, México, trabajamos con clientes locales y remotos en todo el mundo.",
        "Nuestra misión es simple: hacer el diseño web profesional accesible, asequible y sin estrés. Sin lenguaje técnico confuso, sin revisiones infinitas, sin meses de espera. Solo sitios hermosos que ayudan a crecer tu negocio.",
        "Ya sea que tengas un café, gimnasio, clínica o tienda, entendemos tus necesidades y entregamos sitios que realmente generan resultados.",
      ],
      location: "Sirviendo San Miguel de Allende, MX y clientes remotos en todo el mundo",
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t.title}</h2>

          <div className="space-y-6 text-lg text-muted-foreground mb-8">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{t.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
