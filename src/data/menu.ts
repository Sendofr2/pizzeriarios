export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description?: string;
  price?: number;
  image: string;
  badge?: string;
  promoText?: string;
};

export const menu: MenuItem[] = [
  {
    id: 'pizza-especial-xl',
    name: 'Pizza Especial La Fabril XL',
    category: 'Promociones',
    description:
      'Pizza Especial La Fabril XL acompañada de un Vino Trumpeter 375 ml',
    price: 100000,
    image: '/imagenes/menu/pizza-especial-xl.webp',
    badge: 'PROMO',
  },
  {
    id: 'miercoles-20-off',
    name: 'Miércoles 20% OFF',
    category: 'Promociones',
    description:
      'Todos los miércoles, 20% de descuento en todas las pizzas. Elegí tu favorita y aprovechá.',
    image: '/imagenes/menu/promomiercoles.webp',
    badge: 'PROMO',
    promoText: '20% OFF en todas las pizzas',
  },
  {
    id: 'margarita-bulldog',
    name: 'Margarita Bulldog',
    category: 'Tragos & Bebidas',
    price: 25000,
    image: '/imagenes/menu/margarita-bulldog.webp',
  },
  {
    id: 'gin-2x1-bombay',
    name: 'Gin 2x1 Bombay',
    category: 'Tragos & Bebidas',
    price: 22000,
    image: '/imagenes/menu/gin-2x1-bombay.webp',
    badge: '2x1',
  },
  {
    id: 'pizza-milanesa-napolitana',
    name: 'Pizza y Milanesa Napolitana',
    category: 'Hamburguesas & Picadas',
    description: 'Milanesa con papas fritas y huevos fritos',
    price: 55000,
    image: '/imagenes/menu/pizza-milanesa-napolitana.webp',
  },
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    category: 'Pizzas Artesanales',
    description: 'Salsa de tomate San Marzano, mozzarella fior di latte y albahaca fresca',
    price: 45000,
    image: '/imagenes/menu/pizza-margherita.webp',
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni Clásica',
    category: 'Pizzas Artesanales',
    description: 'Pepperoni artesanal, mozzarella, salsa de tomate y orégano',
    price: 52000,
    image: '/imagenes/menu/pizza-pepperoni.webp',
  },
  {
    id: 'pizza-cuatro-quesos',
    name: 'Pizza Cuatro Quesos',
    category: 'Pizzas Artesanales',
    description: 'Mozzarella, gorgonzola, parmesano y fontina sobre base cremosa',
    price: 58000,
    image: '/imagenes/menu/pizza-cuatro-quesos.webp',
  },
  {
    id: 'picada-fabril',
    name: 'Picada La Fabril',
    category: 'Hamburguesas & Picadas',
    description: 'Selección de fiambres, quesos, aceitunas y pan artesanal para compartir',
    price: 65000,
    image: '/imagenes/menu/picada-fabril.webp',
  },
  {
    id: 'hamburguesa-clasica',
    name: 'Hamburguesa Clásica',
    category: 'Hamburguesas & Picadas',
    description: 'Carne 180g, cheddar, lechuga, tomate y salsa de la casa',
    price: 48000,
    image: '/imagenes/menu/hamburguesa-clasica.webp',
  },
  {
    id: 'cerveza-artesanal',
    name: 'Cerveza Artesanal IPA',
    category: 'Tragos & Bebidas',
    description: 'IPA de la casa, 500ml, notas cítricas y amargo equilibrado',
    price: 18000,
    image: '/imagenes/menu/cerveza-artesanal.webp',
  },
  {
    id: 'limonada-suiza',
    name: 'Limonada Suiza',
    category: 'Tragos & Bebidas',
    description: 'Limón natural, menta y un toque de soda',
    price: 12000,
    image: '/imagenes/menu/limonada-suiza.webp',
  },
];
