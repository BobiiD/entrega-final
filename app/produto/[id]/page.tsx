"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { products } from "@/data/products";

export default function ProdutoPage() {
  const params = useParams<{ id: string }>();

  const id = Number(params?.id);
  if (!params?.id || Number.isNaN(id)) return notFound();

  const product = products.find(p => p.id === id);
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-8">
      <Link href="/cardapio" className="underline text-rose-700">
        ← Voltar pro cardápio
      </Link>

      <div className="relative w-full h-72 rounded-2xl overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-rose-800">{product.name}</h1>
        <p className="text-rose-700">{product.description}</p>
        <p className="text-2xl font-semibold text-rose-800">
          R$ {product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}