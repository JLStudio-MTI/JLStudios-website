import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  currentLang: string;
}

const FAQ = ({ currentLang }: FAQProps) => {
  const content = {
    en: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How fast is 48 hours really?",
          answer: "We deliver a first version within 48 hours once we have your brief and assets (logo, photos, text). Most clients are live by the end of the week.",
        },
        {
          question: "Do you help with domain and hosting?",
          answer: "Yes! We can guide you through purchasing a domain and setting up hosting, or handle it entirely for you. We'll configure everything including SSL, email, and DNS.",
        },
        {
          question: "What if I don't have text or photos?",
          answer: "No problem! We can help write professional copy and use high-quality stock images to get you started. You can always update content later.",
        },
        {
          question: "How many revisions are included?",
          answer: "One round of revisions is included with every package. Additional rounds are available if needed for a small fee.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept PayPal, Stripe, bank transfer, and major credit cards. We ask for 50% upfront to start, and 50% on delivery. MXN and USD both accepted.",
        },
        {
          question: "Do you provide ongoing maintenance?",
          answer: "Yes! We offer maintenance packages for updates, security, and content changes. We also provide training so you can make simple edits yourself.",
        },
        {
          question: "What makes you different from other designers?",
          answer: "We specialize in speed and simplicity for small businesses. No confusing proposals, no long waits. Just beautiful, professional websites delivered in 48 hours.",
        },
        {
          question: "Can I see examples of your work?",
          answer: "Absolutely! Check out our Portfolio section above, or request a free mockup for your business to see our work firsthand.",
        },
      ],
    },
    es: {
      title: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Qué tan rápido es realmente 48 horas?",
          answer: "Entregamos una primera versión en 48 horas una vez que tenemos tu brief y assets (logo, fotos, texto). La mayoría de los clientes están en vivo al final de la semana.",
        },
        {
          question: "¿Ayudan con dominio y hosting?",
          answer: "¡Sí! Podemos guiarte en la compra de dominio y configuración de hosting, o manejarlo completamente. Configuramos todo incluyendo SSL, email y DNS.",
        },
        {
          question: "¿Qué pasa si no tengo texto o fotos?",
          answer: "¡No hay problema! Podemos ayudar a escribir textos profesionales y usar imágenes de stock de alta calidad. Siempre puedes actualizar el contenido después.",
        },
        {
          question: "¿Cuántas revisiones están incluidas?",
          answer: "Una ronda de revisiones está incluida en cada paquete. Rondas adicionales están disponibles si es necesario por una pequeña tarifa.",
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos PayPal, Stripe, transferencia bancaria y tarjetas principales. Pedimos 50% al inicio y 50% al entregar. MXN y USD aceptados.",
        },
        {
          question: "¿Proveen mantenimiento continuo?",
          answer: "¡Sí! Ofrecemos paquetes de mantenimiento para actualizaciones, seguridad y cambios de contenido. También damos entrenamiento para que hagas ediciones simples.",
        },
        {
          question: "¿Qué los hace diferentes de otros diseñadores?",
          answer: "Nos especializamos en velocidad y simplicidad para pequeños negocios. Sin propuestas confusas, sin largas esperas. Solo sitios hermosos y profesionales en 48 horas.",
        },
        {
          question: "¿Puedo ver ejemplos de su trabajo?",
          answer: "¡Por supuesto! Revisa nuestra sección de Portafolio arriba, o solicita un mockup gratis para tu negocio y ve nuestro trabajo de primera mano.",
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="faqs" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {t.title}
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-lg px-6 hover:border-accent/50 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
