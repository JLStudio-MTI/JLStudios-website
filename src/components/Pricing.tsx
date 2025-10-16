import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingProps {
  currentLang: string;
}

const Pricing = ({ currentLang }: PricingProps) => {
  const content = {
    en: {
      title: "Simple, Transparent Pricing",
      subtitle: "No hidden fees. Pay 50% to start, 50% on delivery.",
      note: "MXN prices available on request",
      tiers: [
        {
          name: "Starter",
          price: "$299",
          description: "Perfect for getting online fast",
          features: [
            "1-page responsive website",
            "Mobile-first design",
            "Contact form integration",
            "WhatsApp button",
            "Basic SEO setup",
            "48-hour delivery",
          ],
          cta: "Get Started",
          popular: false,
        },
        {
          name: "Business",
          price: "$499",
          description: "Most popular for small businesses",
          features: [
            "Up to 5 pages",
            "All Starter features",
            "Advanced SEO optimization",
            "Google Analytics setup",
            "Speed optimizations",
            "Priority support",
          ],
          cta: "Choose Business",
          popular: true,
        },
        {
          name: "Pro",
          price: "$799",
          description: "Full-featured for growth",
          features: [
            "Unlimited pages",
            "All Business features",
            "E-commerce or booking integration",
            "Blog setup",
            "Copywriting assistance",
            "Dedicated support",
          ],
          cta: "Go Pro",
          popular: false,
        },
      ],
    },
    es: {
      title: "Precios Simples y Transparentes",
      subtitle: "Sin tarifas ocultas. Paga 50% al inicio, 50% al entregar.",
      note: "Precios en MXN disponibles a solicitud",
      tiers: [
        {
          name: "Starter",
          price: "$299",
          description: "Perfecto para estar en línea rápido",
          features: [
            "Sitio de 1 página responsive",
            "Diseño mobile-first",
            "Formulario de contacto",
            "Botón de WhatsApp",
            "SEO básico",
            "Entrega en 48 horas",
          ],
          cta: "Empezar",
          popular: false,
        },
        {
          name: "Business",
          price: "$499",
          description: "Más popular para pequeños negocios",
          features: [
            "Hasta 5 páginas",
            "Todas las funciones Starter",
            "SEO avanzado",
            "Google Analytics",
            "Optimizaciones de velocidad",
            "Soporte prioritario",
          ],
          cta: "Elegir Business",
          popular: true,
        },
        {
          name: "Pro",
          price: "$799",
          description: "Completo para crecer",
          features: [
            "Páginas ilimitadas",
            "Todas las funciones Business",
            "E-commerce o reservas",
            "Blog configurado",
            "Ayuda con textos",
            "Soporte dedicado",
          ],
          cta: "Ir Pro",
          popular: false,
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground mb-2">{t.subtitle}</p>
          <p className="text-sm text-muted-foreground italic">{t.note}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all hover:shadow-large animate-scale-in ${
                tier.popular
                  ? "border-accent shadow-medium scale-105"
                  : "border-border hover:border-accent/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                  {currentLang === "en" ? "Popular" : "Popular"}
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">USD</span>
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${tier.popular ? "" : "variant-outline"}`}
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="#contact">{tier.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
