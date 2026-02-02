import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  const itemDoDia = products.find(p => p.highlight);
  console.log("ITEM DO DIA:", itemDoDia);

  return (
    <div className="w-full flex flex-col gap-16 py-16 px-6 bg-amber-50">

      {/* TÍTULO + DESCRIÇÃO */}
      <section className="text-center flex flex-col gap-6 text-rose-800">
        <h1 className="text-6xl font-medium tracking-wide text-rose-800">
          Clean Girl Confeitaria
        </h1>

        <p className="text-lg text-rose-800 max-w-2xl mx-auto">
          A Clean Girl Confeitaria é uma doceria artesanal que valoriza o cuidado em cada detalhe.
          Cada doce é feito manualmente, unindo simplicidade, delicadeza e afeto em uma experiência
          leve e acolhedora.
        </p>
      </section>

{/* ATALHOS */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* DOCES */}
  <Link href="/cardapio?categoria=doces">
    <div className="relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
      <img
        src="/assets/home/doces.jpg"
        alt="Doces"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/70 flex flex-col justify-center gap-3 p-8">
        <h3 className="text-3xl font-semibold text-rose-800">Doces</h3>
        <p className="text-rose-700">
          Bolos, brownies, cookies e doces artesanais feitos com carinho.
        </p>
        <span className="text-sm font-medium underline underline-offset-4">
          Ver doces →
        </span>
      </div>
    </div>
  </Link>

  {/* BEBIDAS */}
  <Link href="/cardapio?categoria=bebidas">
    <div className="relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
      <img
        src="/assets/home/bebidas.jpg"
        alt="Bebidas"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/70 flex flex-col justify-center gap-3 p-8">
        <h3 className="text-3xl font-semibold text-rose-800">Bebidas</h3>
        <p className="text-rose-700">
          Cafés e bebidas pensadas para acompanhar cada doce.
        </p>
        <span className="text-sm font-medium underline underline-offset-4">
          Ver bebidas →
        </span>
      </div>
    </div>
  </Link>

</section>

      {/* ITEM DO DIA */}
      {itemDoDia && (
        <section
          id="item-do-dia"
          className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-6 font-sans"
        >
          <span className="uppercase text-3xl tracking-widest text-rose-600">
             Item do dia
          </span>

          <div className="relative w-full max-w-md h-44 md:h-48 rounded-xl overflow-hidden">
            <Image
              src={itemDoDia.image}
              alt={itemDoDia.name}
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-5xl font-bold text-rose-800">
            {itemDoDia.name}
          </h2>

          <p className="text-center text-rose-700 max-w-md">
            {itemDoDia.description}
          </p>

          <p className="text-xl font-semibold text-rose-800">
            R$ {itemDoDia.price.toFixed(2)}
          </p>

          <Link
            href={`/produto/${itemDoDia.id}`}
            className="mt-2 px-6 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition"
          >
            Ver produto
          </Link>
        </section>
      )}

      {/* HORÁRIO */}
      <section className="flex flex-col gap-2 font-sans">
        <h3 className="text-3xl font-semibold tracking-wide">
          Horário de funcionamento
        </h3>
        <p className="text-rose-800">
          Segunda a sexta: 10h às 19h<br />
          Sábado: 10h às 16h
        </p>
      </section>

    </div>
  );
}