export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  image: string;
  badge?: string;
};

export const menu: MenuItem[] = [
  // --- PIZZAS ---
  {
    id: 'pizza-jamon',
    name: 'Pizza Jamón',
    category: 'Pizzas',
    price: 25000,
    image: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni',
    category: 'Pizzas',
    description: 'Pepperoni, mozzarella y salsa de tomate.',
    price: 25000,
    image: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Top',
  },
  {
    id: 'pizza-choclo',
    name: 'Pizza Choclo',
    category: 'Pizzas',
    price: 25000,
    image: 'https://images.pexels.com/photos/31450854/pexels-photo-31450854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pizza-doble-mozzarella',
    name: 'Pizza Doble Mozzarella',
    category: 'Pizzas',
    description: 'Doble porción de mozzarella fundida.',
    price: 25000,
    image: 'https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pizza-pollo',
    name: 'Pizza Pollo',
    category: 'Pizzas',
    price: 25000,
    image: 'https://images.pexels.com/photos/5639547/pexels-photo-5639547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pizza-napolitana',
    name: 'Pizza Napolitana',
    category: 'Pizzas',
    description: 'Jamón, tomate y orégano.',
    price: 25000,
    image: 'https://images.pexels.com/photos/13310433/pexels-photo-13310433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pizza-especial-casa',
    name: 'Especial de la Casa',
    category: 'Pizzas',
    description: 'Carne de lomito picada, tomate y morrón.',
    price: 35000,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Especial',
  },

  // --- HAMBURGUESAS ---
  {
    id: 'burger-simple',
    name: 'Simple',
    category: 'Hamburguesas',
    description: 'Carne, tomate, lechuga, choclo, huevo y aderezo.',
    price: 5000,
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'burger-completa',
    name: 'Completa',
    category: 'Hamburguesas',
    description: 'Carne, tomate, lechuga, choclo, huevo, jamón, queso y aderezo.',
    price: 8000,
    image: 'https://images.pexels.com/photos/2128536/pexels-photo-2128536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Top',
  },
  {
    id: 'burger-doble-carne',
    name: 'Doble Carne',
    category: 'Hamburguesas',
    description: '2 carnes, tomate, lechuga, choclo, huevo, jamón, queso y aderezo.',
    price: 10000,
    image: 'https://images.pexels.com/photos/15007048/pexels-photo-15007048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'burger-triple-carne',
    name: 'Triple Carne',
    category: 'Hamburguesas',
    description: '3 carnes, tomate, lechuga, choclo, huevo, jamón, queso y aderezo.',
    price: 15000,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'XXL',
  },

  // --- LOMITOS Y EXTRAS ---
  {
    id: 'lomito-arabe',
    name: 'Lomito Árabe',
    category: 'Lomitos y Extras',
    description: 'Carne de lomito, repollo, queso y jamón.',
    price: 15000,
    image: 'https://images.pexels.com/photos/36750264/pexels-photo-36750264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'super-pancho',
    name: 'Super Pancho',
    category: 'Lomitos y Extras',
    price: 8000,
    image: 'https://images.pexels.com/photos/37308547/pexels-photo-37308547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'empanadas',
    name: 'Empanadas',
    category: 'Lomitos y Extras',
    description: 'Carne, pollo, jamón y queso. 3.000 Gs. c/u.',
    price: 3000,
    image: 'https://images.pexels.com/photos/37327430/pexels-photo-37327430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'c/u',
  },
  {
    id: 'aderezos-extra',
    name: 'Aderezos Extra',
    category: 'Lomitos y Extras',
    description: 'Salsa de ajo 2.000 Gs. · Mayonesa 1.000 Gs. · Ketchup 1.000 Gs.',
    price: 1000,
    image: 'https://images.pexels.com/photos/34318136/pexels-photo-34318136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
