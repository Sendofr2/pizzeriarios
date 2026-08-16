import { REVENUE_CURRENCY } from '../data/config';

export function formatPrice(value: number): string {
  return `${REVENUE_CURRENCY} ${value.toLocaleString('es-PY')}`;
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
  // Only Tuesday (2) is closed
  if (d === 2) {
    return { open: false, label: 'Cerrado', detail: 'Solo los Martes' };
  }
  const cur = now.getHours() * 60 + now.getMinutes();
  const startM = parseHour('18:00');
  const endM = parseHour('00:00'); // midnight treated as end of day
  const open = cur >= startM || cur < endM; // after 18:00 or before midnight
  return {
    open,
    label: open ? 'Abierto ahora' : 'Cerrado ahora',
    detail: 'Mié a Lun · 18:00 a 00:00',
  };
}
