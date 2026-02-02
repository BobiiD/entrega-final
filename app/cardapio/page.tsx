import CardItem from "@/components/CardProduto";
import { products } from "@/data/products";

export default function BebidasPage() {
  const bebidas = products.filter(p => p.category === "bebidas");

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold text-rose-900 mb-8 text-center">
        Nossas bebidas
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bebidas.map(bebida => (
          <CardItem
            key={bebida.id}
            product={bebida}
          />
        ))}
      </div>
    </div>
  );
}