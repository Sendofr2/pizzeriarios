import { ADDRESS, SCHEDULE, MAPS_LINK } from '../data/config';
import { MapPin, Clock, Navigation } from 'lucide-react';

const scheduleRows: { label: string; value: string; closed?: boolean }[] = [
  { label: 'Miércoles a Lunes', value: SCHEDULE.miercoles_lunes },
  { label: 'Martes', value: SCHEDULE.martes, closed: true },
];

export default function InfoGrid() {
  return (
    <section id="info" className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Address card */}
        <div className="rounded-2xl border border-white/10 bg-deepgrey p-6 transition-colors hover:border-amber/40">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-fire/15 text-fire-light">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold uppercase tracking-wider text-amber text-sm">
                Dirección
              </h3>
              <p className="mt-1.5 text-gray-300 text-sm leading-relaxed">
                {ADDRESS}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-amber transition-colors hover:bg-amber hover:text-charcoal"
              >
                <Navigation className="h-3.5 w-3.5" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>

        {/* Schedule card */}
        <div className="rounded-2xl border border-white/10 bg-deepgrey p-6 transition-colors hover:border-amber/40">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-fire/15 text-fire-light">
              <Clock className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-semibold uppercase tracking-wider text-amber text-sm">
                Horarios
              </h3>
              <ul className="mt-1.5 space-y-1.5">
                {scheduleRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-gray-400">{row.label}</span>
                    <span
                      className={`font-medium ${
                        row.closed ? 'text-fire-light' : 'text-gray-200'
                      }`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
