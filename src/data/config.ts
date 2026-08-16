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
  'https://www.google.com/maps/place/Pizzeria+R%C3%ADos/@-27.2860217,-55.8551373,13.88z/data=!4m10!1m2!2m1!1srestaurantes+!3m6!1s0x9457ebe902e7180b:0xa5b3a7258c44d0f4!8m2!3d-27.2843413!4d-55.8167851!15sCgxyZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEKcmVzdGF1cmFudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQycEdkMUl5VGpSbFZtZzJZVlpDU0ZWVVRqTlphbVJIVmpCU01VeFlZeEFC4AEA-gEECAAQMw!16s%2Fg%2F11rcmxmb27?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D';

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
