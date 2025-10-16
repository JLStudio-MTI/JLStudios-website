import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

interface ContactProps {
  currentLang: string;
}

const Contact = ({ currentLang }: ContactProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    honeypot: "", // spam protection
  });

  const content = {
    en: {
      title: "Get Your Free Mockup",
      subtitle: "Let's start building your website today",
      whatsappTitle: "Prefer WhatsApp?",
      whatsappButton: "Chat with Us on WhatsApp",
      form: {
        name: "Your Name",
        business: "Business Name",
        email: "Email Address",
        phone: "Phone (optional)",
        budget: "Select Budget",
        budgetOptions: ["$299 - Starter", "$499 - Business", "$799 - Pro", "Custom"],
        message: "Tell us about your project",
        submit: "Request Free Mockup",
        submitting: "Sending...",
      },
      success: "Thanks! We'll reply within a few hours (often sooner).",
      error: "Something went wrong. Please try WhatsApp or email us directly.",
    },
    es: {
      title: "Obtén Tu Mockup Gratis",
      subtitle: "Empecemos a construir tu sitio web hoy",
      whatsappTitle: "¿Prefieres WhatsApp?",
      whatsappButton: "Chatea con Nosotros en WhatsApp",
      form: {
        name: "Tu Nombre",
        business: "Nombre del Negocio",
        email: "Correo Electrónico",
        phone: "Teléfono (opcional)",
        budget: "Selecciona Presupuesto",
        budgetOptions: ["$299 - Starter", "$499 - Business", "$799 - Pro", "Personalizado"],
        message: "Cuéntanos sobre tu proyecto",
        submit: "Solicitar Mockup Gratis",
        submitting: "Enviando...",
      },
      success: "¡Gracias! Responderemos en pocas horas (a menudo antes).",
      error: "Algo salió mal. Por favor intenta WhatsApp o envíanos un email directo.",
    },
  };

  const t = content[currentLang as keyof typeof content];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: currentLang === "en" ? "Missing fields" : "Campos faltantes",
        description: currentLang === "en" ? "Please fill in all required fields." : "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: currentLang === "en" ? "Invalid email" : "Email inválido",
        description: currentLang === "en" ? "Please enter a valid email address." : "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree (replace with your Formspree endpoint)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: currentLang === "en" ? "Success!" : "¡Éxito!",
          description: t.success,
        });
        setFormData({
          name: "",
          business: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
          honeypot: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: currentLang === "en" ? "Error" : "Error",
        description: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* WhatsApp CTA */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="bg-card border-2 border-accent/30 rounded-2xl p-8 text-center">
              <MessageCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{t.whatsappTitle}</h3>
              <p className="text-muted-foreground mb-6">
                {currentLang === "en"
                  ? "Get instant replies and start your project faster"
                  : "Obtén respuestas instantáneas y empieza tu proyecto más rápido"}
              </p>
              <Button
                size="lg"
                className="w-full bg-cyan hover:bg-cyan/90 text-white shadow-medium"
                asChild
              >
                <a
                  href="https://wa.me/YOUR_NUMBER?text=Hi%20JLStudios%2C%20I'd%20like%20a%20website%20in%2048%20hours"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.whatsappButton}
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border-2 border-border rounded-2xl p-8">
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">{t.form.name} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="business">{t.form.business} *</Label>
                  <Input
                    id="business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">{t.form.email} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.form.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={20}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget">{t.form.budget}</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder={t.form.budget} />
                  </SelectTrigger>
                  <SelectContent>
                    {t.form.budgetOptions.map((option, index) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t.form.message} *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder={
                    currentLang === "en"
                      ? "Tell us about your business, what you need, and any specific features..."
                      : "Cuéntanos sobre tu negocio, lo que necesitas y características específicas..."
                  }
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t.form.submitting : t.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
