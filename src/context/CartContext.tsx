import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { WHATSAPP_PRIMARY } from '../data/config';
import { menu, type MenuItem } from '../data/menu';

export type CartLine = { id: string; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  total: number;
  items: (CartLine & { item: MenuItem })[];
  add: (id: string) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  orderUrl: string;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = (id: string) =>
    setLines((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found) {
        return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { id, qty: 1 }];
    });

  const inc = (id: string) =>
    setLines((prev) =>
      prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)),
    );

  const dec = (id: string) =>
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    );

  const remove = (id: string) =>
    setLines((prev) => prev.filter((l) => l.id !== id));

  const clear = () => setLines([]);

  const items = useMemo(
    () =>
      lines
        .map((l) => {
          const item = menu.find((m) => m.id === l.id);
          return item ? { ...l, item } : null;
        })
        .filter((x): x is CartLine & { item: MenuItem } => x !== null),
    [lines],
  );

  const count = useMemo(
    () => items.reduce((s, l) => s + l.qty, 0),
    [items],
  );

  const total = useMemo(
    () => items.reduce((s, l) => s + l.qty * l.item.price, 0),
    [items],
  );

  const orderUrl = useMemo(() => {
    if (items.length === 0) return '';
    const body = [
      '*Nuevo Pedido - Pizzería Rios*',
      '',
      ...items.map((l) => `• ${l.qty}x ${l.item.name} — Gs. ${(l.qty * l.item.price).toLocaleString('es-PY')}`),
      '',
      `*Total: Gs. ${total.toLocaleString('es-PY')}*`,
    ].join('\n');
    return `https://wa.me/${WHATSAPP_PRIMARY.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(body)}`;
  }, [items, total]);

  const value: CartCtx = {
    lines,
    count,
    total,
    items,
    add,
    inc,
    dec,
    remove,
    clear,
    orderUrl,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
