import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-secondary/50 py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Portal de Abundancia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
