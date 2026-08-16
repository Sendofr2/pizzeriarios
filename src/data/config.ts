export const REVENUE_CURRENCY = 'Gs.';
export const WHATSAPP_PRIMARY = '+595995354558';
export const WHATSAPP_SECONDARY = '+595976549116';

export const BRAND_NAME = 'Pizzería Rios';
export const BRAND_TAGLINE = 'Pizzería & Hamburguesería';
export const BRAND_DESCRIPTION =
  'Los mejores precios y calidad en comidas rápidas. Pizzería y Hamburguesería.';

export const ADDRESS = 'Arroyo Porã, Encarnación, Paraguay (D70310)';
export const DELIVERY_NOTE = 'Costo de delivery: 5.000 Gs. zona Arroyo Porã';

export const SCHEDULE = {
  martes_domingo: '18:00 hs. a 00:00 hs.',
  lunes: 'Cerrado',
} as const;

export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Arroyo+Porã+Encarnación+Paraguay';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PRIMARY.replace(
  /[^0-9]/g,
  '')}?text=${encodeURIComponent(
  '¡Hola Pizzería Rios! Quiero hacer una consulta.',
)}`;

export const WHATSAPP_SECONDARY_LINK = `https://wa.me/${WHATSAPP_SECONDARY.replace(
  /[^0-9]/g,
  '')}?text=${encodeURIComponent(
  '¡Hola Pizzería Rios! Quiero hacer una consulta.',
)}`;

export const CATEGORIES = ['Pizzas', 'Hamburguesas', 'Lomitos y Extras'] as const;
export type Category = (typeof CATEGORIES)[number];
