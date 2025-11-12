'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  priceDetail?: string;
  features: string[];
  isFeatured: boolean;
}

const pricingPlans: Plan[] = [
  {
    name: 'Individual',
    price: '$2,000 MXN',
    priceDetail: '(140 USD)',
    features: ['Acceso completo para 1 persona las 14 noches del ciclo.'],
    isFeatured: false,
  },
  {
    name: 'Parejas sentimentales',
    price: '$3,000 MXN',
    priceDetail: '(210 USD)',
    features: ['Acceso completo para parejas sentimentales las 14 noches del ciclo.'],
    isFeatured: true,
  },
];

export function PricingSection() {
  const handleReservationClick = (plan: Plan) => {
    const phoneNumber = '528181139378';
    const message = `Hola, estoy interesado en el plan ${plan.name} de ${plan.price} para el Portal de Abundancia. ¡Gracias!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="precios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">
            Costo de Participación:
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Elige el plan y comienza tu transformación:
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex w-full max-w-sm flex-col border-2 bg-card shadow-lg ${
                plan.isFeatured
                  ? 'border-accent shadow-accent/20'
                  : 'border-transparent'
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">
                  {plan.name}
                </CardTitle>
                <p className="text-5xl font-bold text-primary">{plan.price}</p>
                {plan.priceDetail && <p className="text-lg text-muted-foreground">{plan.priceDetail}</p>}
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
                    onClick={() => handleReservationClick(plan)}
                >
                    Reserva tu lugar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
