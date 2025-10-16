import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsProps {
  currentLang: string;
}

const Testimonials = ({ currentLang }: TestimonialsProps) => {
  const content = {
    en: {
      title: "What Our Clients Say",
      testimonials: [
        {
          quote: "JLStudios delivered our café's website in 48 hours exactly as promised. We've seen a 40% increase in online orders!",
          author: "Maria Rodriguez",
          role: "Owner, Cozy Café",
        },
        {
          quote: "Professional, fast, and easy to work with. Our gym memberships doubled after launching the new site.",
          author: "Carlos Mendez",
          role: "Manager, FitZone Gym",
        },
        {
          quote: "Finally, a web designer who speaks our language. No tech jargon, just results. Highly recommend!",
          author: "Dr. Ana Gomez",
          role: "Dentist, SmileCare Clinic",
        },
      ],
    },
    es: {
      title: "Lo Que Dicen Nuestros Clientes",
      testimonials: [
        {
          quote: "JLStudios entregó el sitio de nuestro café en 48 horas exactamente como prometieron. ¡Vimos un 40% más de pedidos online!",
          author: "Maria Rodriguez",
          role: "Dueña, Cozy Café",
        },
        {
          quote: "Profesional, rápido y fácil de trabajar. Nuestras membresías de gimnasio se duplicaron después del nuevo sitio.",
          author: "Carlos Mendez",
          role: "Gerente, FitZone Gym",
        },
        {
          quote: "Finalmente, un diseñador web que habla nuestro idioma. Sin jerga técnica, solo resultados. ¡Muy recomendado!",
          author: "Dr. Ana Gomez",
          role: "Dentista, SmileCare Clinic",
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent/50 transition-all hover:shadow-medium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
