import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { ShoppingBag } from 'lucide-react';

type Props = { onOpen: () => void };

export default function CartBar({ onOpen }: Props) {
  const { count, total } = useCart();

  if (count === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:pb-5">
      <button
        onClick={onOpen}
        className="mx-auto flex max-w-md w-full items-center justify-between gap-3 rounded-full bg-amber px-5 py-3.5 font-display font-bold uppercase tracking-wider text-charcoal shadow-2xl shadow-amber/30 transition-all hover:bg-amber-light active:scale-95 animate-slideUp"
      >
        <span className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-charcoal text-amber">
            <ShoppingBag className="h-4 w-4" />
          </span>
          <span className="text-sm">{count} {count === 1 ? 'producto' : 'productos'}</span>
        </span>
        <span className="flex items-center gap-2">
          {formatPrice(total)}
          <span className="rounded-full bg-charcoal px-3 py-1 text-xs text-amber">
            Ver pedido
          </span>
        </span>
      </button>
    </div>
  );
}
