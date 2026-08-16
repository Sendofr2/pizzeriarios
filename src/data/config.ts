export const REVENUE_CURRENCY = 'Gs.';
export const WHATSAPP_NUMBER = '+595985557070';
export const ADDRESS =
  'Calle Antequera 1649 entre 25 de Mayo y Villarrica, Encarnación, Paraguay';
export const SCHEDULE = {
  miercoles_lunes: '18:00 hs. a 00:00 hs.',
  martes: 'Cerrado',
} as const;

export const BRAND_NAME = 'LA FABRIL';
export const BRAND_TAGLINE = 'Pizza Lounge';

export const MAPS_LINK =
  'https://www.google.com/maps/place/La+FABRIL+-+Pizza+Lounge/@-27.3298742,-56.0238055,12z/data=!4m10!1m2!2m1!1sCalle+Antequera+1649+entre+25+de+Mayo+y+Villarrica,+Encarnaci%C3%B3n,+Paraguay!3m6!1s0x94579568527c9387:0x5ae809dbaa49a749!8m2!3d-27.3298742!4d-55.8713702!15sCkpDYWxsZSBBbnRlcXVlcmEgMTY0OSBlbnRyZSAyNSBkZSBNYXlvIHkgVmlsbGFycmljYSwgRW5jYXJuYWNpw7NuLCBQYXJhZ3VheVpKIkhjYWxsZSBhbnRlcXVlcmEgMTY0OSBlbnRyZSAyNSBkZSBtYXlvIHkgdmlsbGFycmljYSBlbmNhcm5hY2nDs24gcGFyYWd1YXmSARBwaXp6YV9yZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJOYWpWcFlYTlJSUkFC4AEA-gEECAAQOw!16s%2Fg%2F11byyd85sk?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(
  /[^0-9]/g,
  '')}?text=${encodeURIComponent(
  '¡Hola La Fabril! Estoy viendo el menú web y quiero hacer una consulta/reserva.',
)}`;

export const CATEGORIES = [
  'Pizzas Artesanales',
  'Hamburguesas & Picadas',
  'Tragos & Bebidas',
  'Promociones',
] as const;

export type Category = (typeof CATEGORIES)[number];
