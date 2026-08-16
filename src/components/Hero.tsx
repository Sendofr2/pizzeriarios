import { BRAND_NAME, BRAND_TAGLINE, BRAND_DESCRIPTION } from '../data/config';
import { getOpenStatus } from '../utils/format';
import { ChevronDown, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  const status = getOpenStatus();

  return (
    <header className="relative overflow-hidden">
      {/* texture / vignette */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px, 64px 64px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-fire/10 via-transparent to-charcoal" />

      <div className="relative mx-auto max-w-5xl px-6 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
        <div className="mx-auto mb-6 flex h-36 w-52 sm:h-44 sm:w-64 items-center justify-center overflow-hidden rounded-2xl border-2 border-amber/70 bg-[#201e1f] p-2 shadow-[0_0_40px_-8px_rgba(255,179,0,0.4)]">
          <img
            src="/imagenes/menu/logorios%20copy.webp"
            alt={BRAND_NAME}
            className="h-full w-full object-contain"
            loading="eager"
          />
        </div>

        {/* status badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deepgrey/80 px-3.5 py-1.5 mb-5 backdrop-blur">
          <span
            className={`h-2 w-2 rounded-full ${
              status.open ? 'bg-green-500 animate-pulseDot' : 'bg-fire'
            }`}
          />
          <span
            className={`font-display text-sm font-semibold tracking-wide ${
              status.open ? 'text-green-400' : 'text-fire-light'
            }`}
          >
            {status.label}
          </span>
          <span className="text-gray-500 text-xs">·</span>
          <span className="text-gray-400 text-xs">{status.detail}</span>
        </div>

        <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-5xl sm:text-7xl">
          <span className="text-white">PIZZERÍA</span>{' '}
          <span className="text-fire">RIOS</span>
          <span className="block text-amber mt-2 text-xl sm:text-2xl tracking-[0.3em]">
            {BRAND_TAGLINE.toUpperCase()}
          </span>
        </h1>

        <p className="mt-5 max-w-xl mx-auto text-gray-400 text-sm sm:text-base text-balance">
          {BRAND_DESCRIPTION}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 font-display font-semibold uppercase tracking-wider text-charcoal shadow-lg shadow-amber/30 transition-all hover:bg-amber-light hover:shadow-amber/40 active:scale-95"
          >
            <UtensilsCrossed className="h-5 w-5" />
            Ver Menú
          </a>
          <a
            href="#info"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-6 py-3.5 font-display font-semibold uppercase tracking-wider text-gray-300 transition-all hover:border-amber/60 hover:text-amber active:scale-95"
          >
            Cómo llegar
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
