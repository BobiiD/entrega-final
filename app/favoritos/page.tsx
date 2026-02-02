"use client";

import { useEffect, useState } from "react";
import CardProduto from "@/components/CardProduto";
import { products } from "@/data/products";

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favoritos");
    setFavoritos(saved ? JSON.parse(saved) : []);
  }, []);

  const produtosFavoritos = products.filter(p =>
    favoritos.includes(p.id)
  );

  if (produtosFavoritos.length === 0) {
    return (
      <p className="text-center py-20">
        Nenhum favorito ⭐
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      {produtosFavoritos.map(product => (
        <CardProduto key={product.id} product={product} />
      ))}
    </div>
  );
}