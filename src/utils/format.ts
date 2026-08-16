import { REVENUE_CURRENCY } from '../data/config';

export function formatPrice(value: number): string {
  return `${REVENUE_CURRENCY} ${value.toLocaleString('es-PY')}`;
}

export function formatPriceShort(value: number): string {
  return `${value.toLocaleString('es-PY')}`;
}

function parseHour(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export function getOpenStatus(now: Date = new Date()): {
  open: boolean;
  label: string;
  detail: string;
} {
  const d = now.getDay(); // 0=Sun ... 6=Sat
  if (d === 1) {
    // Monday closed
    return { open: false, label: 'Cerrado', detail: 'Solo los Lunes' };
  }
  const cur = now.getHours() * 60 + now.getMinutes();
  const startM = parseHour('18:00');
  const endM = parseHour('00:00');
  const open = cur >= startM || cur < endM;
  return {
    open,
    label: open ? 'Abierto ahora' : 'Cerrado ahora',
    detail: 'Mar a Dom · 18:00 a 00:00',
  };
}
