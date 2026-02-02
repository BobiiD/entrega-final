// =========================
// TAGS
// =========================
export const TAGS = [
  { id: 1, label: "Vegano" },
  { id: 2, label: "Vegetariano" },
  { id: 3, label: "Sem Glúten" },
  { id: 4, label: "Sem Lactose" },
  { id: 5, label: "Zero Açúcar" },
  { id: 6, label: "Proteico" }
];

// =========================
// INTERFACE PRODUCT (UNIFICADA)
// =========================
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "doces" | "bebidas";
  image: string;
  tagIds: number[];

  // 🔑 CAMPOS QUE A LÓGICA JÁ USA
  highlight?: boolean;   // item do dia
  favorited: boolean;    // favoritos
}

// =========================
// PRODUCTS
// =========================
export const products: Product[] = [
// ===== DOCES =====
{
  id: 1,
  name: "Cheesecake de Frutas Vermelhas",
  description: "Base crocante, creme suave e calda de frutas vermelhas.",
  price: 18.9,
  category: "doces",
  image: "/assets/doces/cheesecake.webp",
  tagIds: [2],
  highlight: true,
  favorited: false
},
{
  id: 2,
  name: "Torta de Limão Siciliano",
  description: "Massa sablé, recheio de limão e merengue.",
  price: 15.5,
  category: "doces",
  image: "/assets/doces/tortalimao.webp",
  tagIds: [2],
  favorited: false
},
{
  id: 3,
  name: "Brownie Fit Funcional",
  description: "Feito com farinha de amêndoas e xilitol.",
  price: 12.0,
  category: "doces",
  image: "/assets/doces/brownie.webp",
  tagIds: [3, 4, 5],
  favorited: false
},
{
  id: 4,
  name: "Macarons (3 un)",
  description: "Pistache, framboesa e baunilha.",
  price: 22.0,
  category: "doces",
  image: "/assets/doces/macarons.webp",
  tagIds: [3, 2],
  favorited: false
},
{
  id: 5,
  name: "Mousse de Abacate com Cacau",
  description: "Abacate, cacau e leite de coco.",
  price: 14.9,
  category: "doces",
  image: "/assets/doces/mousse.jpg",
  tagIds: [1, 3, 4],
  favorited: false
},
{
  id: 6,
  name: "Trufas de Tâmaras e Coco",
  description: "Doce natural com castanhas.",
  price: 8.5,
  category: "doces",
  image: "/assets/doces/trufas.jpg",
  tagIds: [1, 3, 4, 5],
  highlight: false,
  favorited: false
},
{
  id: 7,
  name: "Brigadeiro de Whey Protein",
  description: "Versão proteica do clássico brasileiro.",
  price: 9.0,
  category: "doces",
  image: "/assets/doces/brigadeiro.webp",
  tagIds: [6, 5, 3],
  favorited: false
},
{
  id: 8,
  name: "Cupcake Low Carb de Baunilha",
  description: "Fofinho e adoçado naturalmente.",
  price: 11.5,
  category: "doces",
  image:
    "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
  tagIds: [3, 5, 2],
  favorited: false
},
{
  id: 9,
  name: "Torta de Maçã Integral",
  description: "Maçãs frescas e canela.",
  price: 16.0,
  category: "doces",
  image: "/assets/doces/tortamaca.jpeg",
  tagIds: [1, 4],
  favorited: false
},
{
  id: 10,
  name: "Barra Proteica Caseira",
  description: "Aveia, pasta de amendoim e whey.",
  price: 13.0,
  category: "doces",
  image: "/assets/doces/barrinha.jpeg",
  tagIds: [6, 2],
  favorited: false
},
{
  id: 11,
  name: "Pavê de Doce de Leite",
  description: "Doce de leite argentino.",
  price: 19.5,
  category: "doces",
  image: "/assets/doces/pave.jpg",
  tagIds: [2],
  highlight: false,
  favorited: false
},
{
  id: 12,
  name: "Bombom de Pasta de Amendoim",
  description: "Chocolate 70% recheado.",
  price: 6.5,
  category: "doces",
  image: "/assets/doces/bombom.jpg",
  tagIds: [1, 6, 3],
  favorited: false
},

// ===== BEBIDAS =====

{
  id: 13,
  name: "Cappuccino Italiano",
  description: "Expresso com leite vaporizado.",
  price: 10.0,
  category: "bebidas",
  image:
    "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
  tagIds: [2, 3],
  favorited: false
},
{
  id: 14,
  name: "Matcha Latte Gelado",
  description: "Chá verde com leite de amêndoas.",
  price: 14.5,
  category: "bebidas",
  image: "/assets/bebidas/matcha.webp",
  tagIds: [1, 3, 4],
  favorited: false
},
{
  id: 15,
  name: "Soda Italiana Maçã Verde",
  description: "Refrescante e gaseificada.",
  price: 12.0,
  category: "bebidas",
  image: "/assets/bebidas/soda.webp",
  tagIds: [1, 3, 4],
  favorited: false
},
{
  id: 16,
  name: "Chocolate Quente",
  description: "Chocolate nobre derretido.",
  price: 13.0,
  category: "bebidas",
  image:
    "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
  tagIds: [2, 3],
  highlight: false,
  favorited: true
},
{
  id: 17,
  name: "Chá de Hibisco",
  description: "Infusão com frutas.",
  price: 9.5,
  category: "bebidas",
  image:
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
  tagIds: [1, 5, 3, 4],
  favorited: false
},
{
  id: 18,
  name: "Shake de Whey Chocolate",
  description: "Shake proteico cremoso.",
  price: 18.0,
  category: "bebidas",
  image:
    "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
  tagIds: [6, 3, 5],
  favorited: false
},
{
  id: 19,
  name: "Smoothie Tropical Proteico",
  description: "Manga, maracujá e proteína vegetal.",
  price: 19.9,
  category: "bebidas",
  image: "/assets/bebidas/smotie.jpg",
  tagIds: [1, 6, 3, 4],
  favorited: false
},
{
  id: 20,
  name: "Iced Coffee Proteico",
  description: "Café gelado com proteína.",
  price: 16.5,
  category: "bebidas",
  image:
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  tagIds: [6, 3, 5],
  favorited: false
},
{
  id: 21,
  name: "Golden Milk",
  description: "Leite de coco com especiarias.",
  price: 14.0,
  category: "bebidas",
  image: "/assets/bebidas/milk.webp",
  tagIds: [1, 3, 4, 5],
  favorited: false
},
{
  id: 22,
  name: "Suco Detox Verde",
  description: "Couve, limão e gengibre.",
  price: 12.9,
  category: "bebidas",
  image:
    "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80",
  tagIds: [1, 3, 4, 5],
  favorited: false
},
{
  id: 23,
  name: "Frappuccino de Caramelo",
  description: "Café com calda de caramelo.",
  price: 17.0,
  category: "bebidas",
  image: "/assets/bebidas/frapo.webp",
  tagIds: [2, 3],
  favorited: false
},
{
  id: 24,
  name: "Limonada Suíça com Coco",
  description: "Limão com leite de coco.",
  price: 11.0,
  category: "bebidas",
  image: "/assets/bebidas/limonada.webp",
  tagIds: [1, 3, 4],
  highlight: false,
  favorited: false
}
];

// =========================
// HELPER
// =========================
export function getTagName(id: number): string {
  const tag = TAGS.find(t => t.id === id);
  return tag ? tag.label : "";
}