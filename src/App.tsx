import { useMemo, useState } from 'react';
import { CATEGORIES, type Category } from './data/config';
import { menu } from './data/menu';
import { CartProvider } from './context/CartContext';
import Hero from './components/Hero';
import InfoGrid from './components/InfoGrid';
import CategoryFilter from './components/CategoryFilter';
import MenuFeed from './components/MenuFeed';
import CatupiryBanner from './components/CatupiryBanner';
import CartBar from './components/CartBar';
import CartDrawer from './components/CartDrawer';
import WhatsAppFAB from './components/WhatsAppFAB';
import { Flame } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState<Category>(CATEGORIES[0]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(
    () => menu.filter((i) => i.category === active),
    [active],
  );

  return (
    <CartProvider>
      <div className="min-h-screen bg-charcoal pb-24">
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

          <CategoryFilter active={active} onChange={setActive} />

          {active === 'Pizzas' && <CatupiryBanner />}

          <MenuFeed items={filtered} />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-deepgrey">
          <div className="mx-auto max-w-5xl px-6 py-8 text-center">
            <p className="font-display text-2xl font-bold uppercase tracking-wider text-white">
              PIZZERÍA <span className="text-fire">RIOS</span>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Arroyo Porã, Encarnación, Paraguay · Pizzería & Hamburguesería
            </p>
          </div>
        </footer>

        <CartBar onOpen={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        <WhatsAppFAB />
      </div>
    </CartProvider>
  );
}
