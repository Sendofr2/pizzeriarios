import { useMemo, useState } from 'react';
import { CATEGORIES, type Category } from './data/config';
import { menu } from './data/menu';
import Hero from './components/Hero';
import InfoGrid from './components/InfoGrid';
import CategoryFilter from './components/CategoryFilter';
import MenuFeed from './components/MenuFeed';
import WhatsAppFAB from './components/WhatsAppFAB';
import { Flame } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState<Category>(CATEGORIES[0]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const item of menu) c[item.category] = (c[item.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(
    () => menu.filter((i) => i.category === active),
    [active],
  );

  return (
    <div className="min-h-screen bg-charcoal">
      <Hero />
      <InfoGrid />

      {/* Menu section */}
      <section id="menu" className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 text-fire">
            <Flame className="h-5 w-5" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em]">
              Nuestro Menú
            </span>
            <Flame className="h-5 w-5" />
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
            Elegí tu favorito
          </h2>
        </div>

        <CategoryFilter active={active} onChange={setActive} counts={counts} />

        <MenuFeed items={filtered} />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-deepgrey">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center">
          <p className="font-display text-2xl font-bold uppercase tracking-wider text-white">
            LA FABRIL <span className="text-fire">·</span>{' '}
            <span className="text-amber">Pizza Lounge</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Encarnación, Paraguay · Hecho con mucho amor
          </p>
        </div>
      </footer>

      <WhatsAppFAB />
    </div>
  );
}
