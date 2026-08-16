import { type MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { Star, Plus, Minus, Check } from 'lucide-react';

type Props = { items: MenuItem[] };

export default function MenuFeed({ items }: Props) {
  const { lines, add, inc, dec } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500 font-display uppercase tracking-wider">
        No hay items en esta categoría
      </div>
    );
  }

  const qtyFor = (id: string) => lines.find((l) => l.id === id)?.qty ?? 0;

  return (
    <div
      key={items[0]?.category}
      className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, i) => {
        const qty = qtyFor(item.id);
        return (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-deepgrey transition-all duration-300 hover:border-amber/40 hover:shadow-xl hover:shadow-black/40"
            style={{
              animation: `fadeIn 0.45s ease-out ${Math.min(i * 60, 480)}ms both`,
            }}
          >
            {/* image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-chalkboard">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = '0';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepgrey/80 via-transparent to-transparent" />
              {item.badge && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-amber px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-charcoal shadow-lg">
                  <Star className="h-3 w-3 fill-charcoal" />
                  {item.badge}
                </span>
              )}
            </div>

            {/* body */}
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white leading-snug">
                {item.name}
              </h3>
              {item.description && (
                <p className="mt-1.5 text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              )}
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="font-display text-xl font-bold text-amber">
                  {formatPrice(item.price)}
                </span>

                {qty === 0 ? (
                  <button
                    onClick={() => add(item.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-fire px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-fire/20 transition-all hover:bg-fire-light active:scale-95"
                  >
                    <Plus className="h-4 w-4" />
                    Pedir
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-1 rounded-full bg-amber/10 border border-amber/40 p-1">
                    <button
                      onClick={() => dec(item.id)}
                      className="grid h-8 w-8 place-items-center rounded-full bg-deepgrey text-amber transition-colors hover:bg-fire hover:text-white active:scale-90"
                      aria-label="Quitar uno"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-[2rem] text-center font-display text-sm font-bold text-amber tabular-nums">
                      {qty}
                    </span>
                    <button
                      onClick={() => inc(item.id)}
                      className="grid h-8 w-8 place-items-center rounded-full bg-deepgrey text-amber transition-colors hover:bg-amber hover:text-charcoal active:scale-90"
                      aria-label="Agregar uno"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {qty > 0 && (
                <div className="mt-3 flex items-center gap-1.5 text-xs text-green-400 font-display uppercase tracking-wider">
                  <Check className="h-3.5 w-3.5" />
                  En tu pedido
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
