import { Flame } from 'lucide-react';

export default function CatupiryBanner() {
  return (
    <div className="mt-6 mb-2 overflow-hidden rounded-2xl border border-amber/30 bg-gradient-to-r from-fire/20 via-deepgrey to-deepgrey">
      <div className="flex items-center justify-center gap-3 px-4 py-3.5 text-center">
        <Flame className="h-5 w-5 shrink-0 text-fire-light" />
        <p className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-amber">
          Agregado de queso catupiry: 5.000 Gs!!!
        </p>
        <Flame className="h-5 w-5 shrink-0 text-fire-light" />
      </div>
    </div>
  );
}
