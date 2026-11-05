export type ProductKind = 'tee' | 'hoodie' | 'cap' | 'mug' | 'mousepad' | 'stickers';

export interface Product {
  id: string;
  name: string;
  kind: ProductKind;
  price: number;
  color: string;
  category: 'Ropa' | 'Accesorios' | 'Setup';
  badge?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'tee-bull-run',
    name: 'Tee "Bull Run"',
    kind: 'tee',
    price: 29,
    color: '#140f22',
    category: 'Ropa',
    badge: 'Nuevo',
    description: 'Algodón orgánico 220g, estampado frontal con logo ZX y velas en verde neón.',
  },
  {
    id: 'hoodie-risk-manager',
    name: 'Hoodie "Risk Manager"',
    kind: 'hoodie',
    price: 59,
    color: '#1a1429',
    category: 'Ropa',
    badge: 'Top ventas',
    description: 'Fleece heavyweight, bordado ZX en el pecho y "1% RISK" en la espalda.',
  },
  {
    id: 'cap-zx',
    name: 'Gorra ZX Snapback',
    kind: 'cap',
    price: 25,
    color: '#0e0a18',
    category: 'Accesorios',
    description: 'Snapback estructurada con monograma ZX bordado en 3D.',
  },
  {
    id: 'mug-green-candles',
    name: 'Taza "Green Candles"',
    kind: 'mug',
    price: 16,
    color: '#f1eeff',
    category: 'Setup',
    description: 'Cerámica 350ml. Para el café de la apertura de Nueva York.',
  },
  {
    id: 'mousepad-chart',
    name: 'Desk Mat "Chart"',
    kind: 'mousepad',
    price: 34,
    color: '#0b0814',
    category: 'Setup',
    badge: 'Edición limitada',
    description: 'Desk mat XL 90×40cm con gráfico de velas y niveles clave.',
  },
  {
    id: 'stickers-pack',
    name: 'Pack de Stickers',
    kind: 'stickers',
    price: 9,
    color: '#120e1e',
    category: 'Accesorios',
    description: '8 stickers de vinilo resistentes al agua para tu laptop o setup.',
  },
];
