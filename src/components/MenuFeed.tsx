import { type MenuItem } from '../data/menu';
import { formatPrice } from '../utils/format';
import { Star } from 'lucide-react';

type Props = { items: MenuItem[] };

export default function MenuFeed({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500 font-display uppercase tracking-wider">
        No hay items en esta categoría
      </div>
    );
  }

  return (
    <div
      key={items[0]?.category}
      className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, i) => (
        <article
          key={item.id}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-deepgrey transition-all duration-300 hover:border-amber/40 hover:shadow-xl hover:shadow-black/40"
          style={{
            animation: `fadeIn 0.45s ease-out ${Math.min(i * 60, 480)}ms both`,
          }}
        >
          {/* image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-chalkboard">
            {/* placeholder when no image */}
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-chalkboard to-charcoal">
              <span className="font-display text-5xl font-bold text-white/5 uppercase">
                {item.name.slice(0, 2)}
              </span>
            </div>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
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
            <div className="mt-4 flex items-center justify-between">
              {item.promoText ? (
                <span className="font-display text-base font-bold uppercase tracking-wide text-amber">
                  {item.promoText}
                </span>
              ) : (
                <span className="font-display text-xl font-bold text-amber">
                  {formatPrice(item.price!)}
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
