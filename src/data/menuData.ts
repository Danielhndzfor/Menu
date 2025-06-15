export type Product = {
  id: number;
  name: string;
  price: number;
  desc?: string;
  price2?: number;
  // Add type to distinguish different two-column scenarios
  priceType?: 'media-orden' | 'natural-carne' | 'medio-kilo' | 'chica-grande';
};

export type CartItem = Product & { 
  qty: number;
  observations?: string;
};

export type MenuSection = {
  key: string;
  title: string;
  icon: string;
  products: Product[];
};

export const MENU: MenuSection[] = [
  {
    key: "tacos",
    title: "TACOS",
    icon: "🌮",
    products: [
      { id: 1, name: "Pastor", price: 20 },
      { id: 2, name: "Bistec", price: 20 },
      { id: 3, name: "Chorizo", price: 20 },
      { id: 4, name: "Arrachera", price: 25 },
    ],
  },
  {
    key: "volcanes",
    title: "VOLCÁN Y GRINGAS",
    icon: "🌋",
    products: [
      { id: 5, name: "Pastor", price: 100 },
      { id: 6, name: "Bistec", price: 100 },
      { id: 7, name: "Chorizo", price: 100 },
      { id: 8, name: "Arrachera", price: 110 },
    ],
  },
  {
    key: "pellizcada",
    title: "PELLIZCADA",
    icon: "🫓",
    products: [
      { id: 9, name: "Pastor", price: 85 },
      { id: 10, name: "Bistec", price: 85 },
      { id: 11, name: "Chorizo", price: 85 },
      { id: 12, name: "Arrachera", price: 85 },
    ],
  },
  {
    key: "papas",
    title: "PAPAS",
    icon: "🍟",
    products: [
      { id: 13, name: "Natural", price: 90, desc: "*Preparadas en una base de papas con queso, crema, elote, champiñones y mantequilla." },
      { id: 14, name: "Pastor", price: 100 },
      { id: 15, name: "Bistec", price: 100 },
      { id: 16, name: "Chorizo", price: 100 },
      { id: 17, name: "Arrachera", price: 110 },
      { id: 18, name: "Mixto", price: 110 },
      { id: 19, name: "Especial", price: 110 },
    ],
  },
  {
    key: "especialidades",
    title: "ESPECIALIDADES",
    icon: "⭐",
    products: [
      { id: 20, name: "Colima", price: 120, price2: 160, desc: "Pastor, Bistec, Morrón, Cebolla, Piña, Tocino y Queso", priceType: 'media-orden' },
      { id: 21, name: "Honolulu", price: 120, price2: 160, desc: "Pastor, Jamón, Piña, Tocino y Queso", priceType: 'media-orden' },
      { id: 22, name: "Sin Nombre", price: 120, price2: 160, desc: "Pastor, Bistec, Cebolla, Tocino y Queso", priceType: 'media-orden' },
      { id: 23, name: "Que Me Notas", price: 120, price2: 160, desc: "Pastor, Champiñón, Tocino y Queso", priceType: 'media-orden' },
      { id: 24, name: "Alambre De Pollo", price: 120, price2: 160, desc: "Pollo, Jamón, Morrón, Jitomate, Cebolla, Piña, Tocino y Queso", priceType: 'media-orden' },
      { id: 25, name: "Alambre XL", price: 120, price2: 160, desc: "Pastor, Bistec, Chorizo, Morrón, Cebolla, Jitomate y Queso", priceType: 'media-orden' },
      { id: 26, name: "Atuncito", price: 120, price2: 160, desc: "Atún, Piña, Morrón, Cebolla, Jitomate, Champiñón y Queso", priceType: 'media-orden' },
      { id: 27, name: "México", price: 120, price2: 160, desc: "Pastor, Bistec, Jalapeño, Cebolla y Queso", priceType: 'media-orden' },
      { id: 28, name: "Ya Te Vi", price: 120, price2: 160, desc: "Bistec, Champiñón, Tocino y Queso", priceType: 'media-orden' },
      { id: 29, name: "Taquiqueso", price: 120, price2: 170, desc: "Carne a elección dentro de una tortilla con queso", priceType: 'media-orden' },
      { id: 30, name: "Sinaloa", price: 120, price2: 170, desc: "Arrachera, Pastor, Cebolla, Tocino, Queso y Tortilla Frita", priceType: 'media-orden' },
      { id: 31, name: "Vegetariana", price: 120, price2: 170, desc: "Cebolla, Morrón, Champiñón, Jitomate, Piña y Queso", priceType: 'media-orden' },
    ],
  },
  {
    key: "quesos",
    title: "QUESOS",
    icon: "🧀",
    products: [
      { id: 32, name: "Fundido", price: 105, price2: 120, priceType: 'natural-carne' },
      { id: 33, name: "Quesadilla", price: 37, price2: 50, priceType: 'natural-carne' },
      { id: 34, name: "Chicharron", price: 110 },
      { id: 35, name: "Quesito Colima", price: 30 },
    ],
  },
  {
    key: "ordenes",
    title: "ÓRDENES",
    icon: "🍽️",
    products: [
      { id: 36, name: "Pastor", price: 110, price2: 160, priceType: 'media-orden' },
      { id: 37, name: "Bistec", price: 110, price2: 160, priceType: 'media-orden' },
      { id: 38, name: "Chorizo", price: 110, price2: 170, priceType: 'media-orden' },
      { id: 39, name: "Arrachera", price: 130, price2: 180, priceType: 'media-orden' },
      { id: 40, name: "Mixto", price: 120, price2: 180, priceType: 'media-orden' },
    ],
  },
  {
    key: "kilos",
    title: "KILOS",
    icon: "⚖️",
    products: [
      { id: 41, name: "Pastor", price: 175, price2: 270, priceType: 'medio-kilo' },
      { id: 42, name: "Bistec", price: 160, price2: 270, priceType: 'medio-kilo' },
      { id: 43, name: "Chorizo", price: 160, price2: 270, priceType: 'medio-kilo' },
      { id: 44, name: "Arrachera", price: 210, price2: 280, priceType: 'medio-kilo' },
      { id: 45, name: "Mixto", price: 190, price2: 280, priceType: 'medio-kilo' },
    ],
  },
  {
    key: "parrilladas",
    title: "PARRILLADAS",
    icon: "🔥",
    products: [
      { id: 46, name: "Parrillada Chica", price: 430, desc: "2 ordenes de especialidad, 1 orden carne mixta, 2 quesadillas naturales" },
      { id: 47, name: "Parrillada Grande", price: 800, desc: "4 ordenes de especialidad, 1 orden de carne mixta, 1 fundido (natural, carne, champiñón o natural)" },
    ],
  },
  {
    key: "bebidas",
    title: "BEBIDAS",
    icon: "🥤",
    products: [
      { id: 48, name: "Refresco", price: 30 },
      { id: 49, name: "Agua Fresca Chica", price: 30 },
      { id: 50, name: "Agua Fresca Litro", price: 45 },
      { id: 51, name: "Jarra", price: 70 },
    ],
  },
  {
    key: "extras",
    title: "EXTRAS",
    icon: "🌶️",
    products: [
      { id: 52, name: "Carne", price: 30 },
      { id: 53, name: "Cebolla Frita", price: 30 },
    ],
  },
];
