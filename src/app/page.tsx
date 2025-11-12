'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  Star,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PricingSection } from '@/components/layout/pricing-section';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

const inclusions = [
  'Meditaciones guiadas para la reprogramación mental.',
  'Activación y reconexión de tus fibras de ADN con la abundancia del dinero para elevar tu vibración.',
  'Trabajo profundo con la energía de la abundancia.',
  'Acceso a un grupo exclusivo de WhatsApp para apoyo continuo.',
];

const experienceDetails = [
  {
    night: 'Noche 1: Apertura y Conexión',
    description:
      'Iniciaremos nuestro viaje abriendo el portal energético. Realizaremos una meditación de limpieza y conexión con la fuente de la abundancia universal para preparar nuestro campo energético.',
  },
  {
    night: 'Noche 2: Sanando Creencias Limitantes',
    description:
      'Identificaremos y liberaremos los bloqueos y creencias que te impiden prosperar. Una noche de sanación profunda para reprogramar tu subconsciente hacia la riqueza.',
  },
  {
    night: 'Noche 3: Activación de la Prosperidad',
    description:
      'Recibirás potentes activaciones energéticas para sintonizar tu vibración con la frecuencia de la abundancia. Magnetiza tus deseos y abre las puertas al éxito material y espiritual.',
  },
  {
    night: 'Noche 4: Integración y Manifestación',
    description:
      'Cerraremos nuestro portal integrando las nuevas energías y conocimientos. Aprenderás herramientas prácticas para mantener y expandir la abundancia en tu vida diaria.',
  },
];

export default function PortalDeAbundanciaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DescriptionSection />
        <InclusionsSection />
        <ExperienceSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex h-[80svh] min-h-[600px] w-full items-center justify-center text-center text-white"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl animate-fade-in-up p-4">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          Portal de Abundancia
        </h1>
        <p className="mt-4 text-lg text-gray-200 md:text-xl lg:text-2xl">
          Un viaje de 14 noches para transformar tu realidad y manifestar la
          vida que deseas.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full transform bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 sm:w-auto"
          >
            <a href="#precios">Reserva tu lugar</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-accent bg-transparent text-accent transition-all duration-300 hover:scale-105 hover:bg-accent/20 sm:w-auto"
          >
            <a href="#descripcion">Más información</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DescriptionSection() {
  return (
    <section id="descripcion" className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">
          ACTIVA TU ABUNDANCIA CON LA AYUDA DE LOS SERES DE LUZ.
        </h2>
        <p className="mt-6 whitespace-pre-wrap text-lg text-muted-foreground md:text-xl">
          Si estás viendo este video, es porque mereces y estás listo para poder
          conectar con tu poder innato de creación de abundancia.
          {'\n\n'}A través de un viaje de 14 noches activaremos juntos un portal
          interdimensional donde trabajarás con Astar Katar, con los seres de
          las estrellas, ángeles y arcángeles, para sanar, liberar y atraer la
          abundancia en todas las áreas de tu vida.
        </p>
      </div>
    </section>
  );
}

function InclusionsSection() {
  return (
    <section id="inclusiones" className="pb-12 md:pb-16 pt-4 md:pt-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">
            ¿Qué incluye esta experiencia?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Recibirás todas las herramientas necesarias para tu transformación.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <ul className="space-y-4">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start text-lg">
                <CheckCircle2 className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">
            La Experiencia Nocturna
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Desde que te inscribes y durante todas las noches serás trabajado y activado a través del portal multidimensional de Astar Katar.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {experienceDetails.map((detail, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-headline text-xl hover:no-underline">
                <div className="flex items-center">
                  <Star className="mr-3 h-5 w-5 text-accent" /> {detail.night}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {detail.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
