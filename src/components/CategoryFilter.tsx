import { type Dispatch, type SetStateAction } from 'react';
import { CATEGORIES, type Category } from '../data/config';
import { menu } from '../data/menu';

type Props = {
  active: Category;
  onChange: Dispatch<SetStateAction<Category>>;
};

export default function CategoryFilter({ active, onChange }: Props) {
  const counts = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = menu.filter((i) => i.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="no-scrollbar flex gap-2.5 overflow-x-auto px-6 pb-2 sm:justify-center">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        const count = counts[cat] ?? 0;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`group relative shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-all active:scale-95 ${
              isActive
                ? 'bg-fire text-white shadow-lg shadow-fire/30'
                : 'border border-white/12 bg-deepgrey text-gray-400 hover:border-amber/50 hover:text-amber'
            }`}
          >
            {cat}
            <span
              className={`ml-2 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-gray-500 group-hover:text-amber'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
