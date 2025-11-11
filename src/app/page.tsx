import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Briefcase,
  CheckCircle2,
  Gem,
  HeartHandshake,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

const benefits = [
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Abundancia Material',
    description: 'Desbloquea tu capacidad de atraer prosperidad y riqueza.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Éxito Profesional',
    description: 'Impulsa tu carrera y alcanza tus metas laborales.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Realización Personal',
    description: 'Conecta con tu propósito y vive una vida plena.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Relaciones Armoniosas',
    description: 'Sana y fortalece tus vínculos afectivos.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Bienestar Integral',
    description: 'Equilibra tu cuerpo, mente y espíritu.',
  },
];

const inclusions = [
  'Meditaciones guiadas para la reprogramación mental.',
  'Activaciones energéticas para elevar tu vibración.',
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

const pricingPlans = [
  {
    plan: 'Individual',
    price: '$44 USD',
    features: ['Acceso completo para 1 persona a las 4 noches del evento.'],
    cta: 'Reserva tu lugar',
  },
  {
    plan: 'Parejas',
    price: '$77 USD',
    features: ['Acceso completo para 2 personas a las 4 noches del evento.'],
    cta: 'Reserva su lugar',
  },
];

export default function PortalDeAbundanciaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DescriptionSection />
        <BenefitsSection />
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
          Un viaje de 4 noches para transformar tu realidad y manifestar la vida
          que mereces.
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
          Abre las Puertas a una Vida Plena
        </h2>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Este evento está diseñado para ti si sientes que mereces más, si
          buscas un cambio profundo y estás listo para conectar con tu poder
          interior. A través de un viaje de 4 noches, activaremos juntos un
          portal energético para sanar, liberar y atraer la abundancia en todas
          las áreas de tu vida.
        </p>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">
            Beneficios que Transformarán tu Vida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Experimenta una metamorfosis en todas las áreas de tu existencia.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="transform border-transparent bg-card text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader className="items-center">
                {benefit.icon}
                <CardTitle className="font-headline text-xl">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InclusionsSection() {
  return (
    <section id="inclusiones" className="py-16 md:py-24">
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
            Cada noche es un paso más profundo hacia tu nuevo yo.
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

function PricingSection() {
  return (
    <section id="precios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">
            Invierte en Tu Abundancia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Elige el plan que resuene contigo y comienza tu transformación.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex w-full max-w-sm flex-col border-2 bg-card shadow-lg ${
                index === 0
                  ? 'border-transparent'
                  : 'border-accent shadow-accent/20'
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">
                  {plan.plan}
                </CardTitle>
                <p className="text-5xl font-bold text-primary">{plan.price}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full transform bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
