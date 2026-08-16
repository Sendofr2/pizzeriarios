import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { DELIVERY_NOTE } from '../data/config';
import { X, Plus, Minus, ShoppingBag, Trash2, Send } from 'lucide-react';

type Props = { open: boolean; onClose: () => void };

export default function CartDrawer({ open, onClose }: Props) {
  const { items, total, count, inc, dec, remove, clear, orderUrl } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-charcoal border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-amber" />
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">
              Tu Pedido
            </h2>
            {count > 0 && (
              <span className="rounded-full bg-fire px-2 py-0.5 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-deepgrey text-gray-400 transition-colors hover:bg-fire hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-deepgrey">
                <ShoppingBag className="h-8 w-8 text-gray-600" />
              </div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-gray-500">
                Tu pedido está vacío
              </p>
              <p className="text-sm text-gray-600">
                Agregá productos del menú para armar tu pedido.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((l) => (
                <li
                  key={l.id}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-deepgrey p-3"
                >
                  <img
                    src={l.item.image}
                    alt={l.item.name}
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white leading-tight truncate">
                      {l.item.name}
                    </h4>
                    <p className="text-xs text-amber font-bold mt-0.5">
                      {formatPrice(l.item.price)}
                    </p>
                    <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-charcoal p-0.5">
                      <button
                        onClick={() => dec(l.id)}
                        className="grid h-7 w-7 place-items-center rounded-full text-amber transition-colors hover:bg-fire hover:text-white active:scale-90"
                        aria-label="Quitar"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-[1.5rem] text-center font-display text-sm font-bold text-white tabular-nums">
                        {l.qty}
                      </span>
                      <button
                        onClick={() => inc(l.id)}
                        className="grid h-7 w-7 place-items-center rounded-full text-amber transition-colors hover:bg-amber hover:text-charcoal active:scale-90"
                        aria-label="Agregar"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-display text-sm font-bold text-white tabular-nums">
                      {formatPrice(l.qty * l.item.price)}
                    </span>
                    <button
                      onClick={() => remove(l.id)}
                      className="text-gray-600 transition-colors hover:text-fire"
                      aria-label="Eliminar"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 bg-deepgrey px-5 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm uppercase tracking-wider text-gray-400">
                Total
              </span>
              <span className="font-display text-2xl font-bold text-amber">
                {formatPrice(total)}
              </span>
            </div>
            <p className="text-center text-[11px] text-gray-500">
              {DELIVERY_NOTE}
            </p>
            <a
              href={orderUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white shadow-lg shadow-[#25D366]/30 transition-all hover:brightness-110 active:scale-95"
            >
              <Send className="h-4 w-4" />
              Enviar Pedido por WhatsApp
            </a>
            <button
              onClick={clear}
              className="w-full text-center text-xs text-gray-500 transition-colors hover:text-fire"
            >
              Vaciar pedido
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
