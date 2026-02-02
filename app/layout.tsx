"use client";

import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body className={`${playfair.className} bg-amber-50 text-rose-900`}>

        {/* TOPO */}
        <header className="w-full h-16 sticky top-0 z-50 flex items-center justify-between px-6 shadow-sm border-b bg-amber-50 text-rose-800">

          {/* ESQUERDA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="text-3xl text-rose-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              ☰
            </button>

            <span className="font-semibold text-2xl">
              Clean Girl
            </span>
          </div>

          {/* DIREITA */}
          <div className="flex items-center gap-6 text-sm font-medium text-rose-800">
            <a
              href="/cardapio"
              className="hover:underline underline-offset-4"
            >
              Cardápio
            </a>

            <a
              href="/favoritos"
              className="hover:underline underline-offset-4"
            >
              Favoritos
            </a>
          </div>

        </header>

        {/* SIDEBAR */}
        {open && (
          <aside className="fixed inset-0 z-50 flex">
            <nav className="w-64 h-full bg-amber-50 p-8 flex flex-col gap-6 shadow-xl text-rose-800">
              <button
                onClick={() => setOpen(false)}
                className="self-end text-2xl"
              >
                ✕
              </button>

              <a href="/" className="text-lg font-medium hover:underline">
                Home
              </a>
              <a href="/cardapio/bebidas" className="text-lg font-medium hover:underline">
                Bebidas
              </a>
              <a href="/cardapio/doces" className="text-lg font-medium hover:underline">
                Doces
              </a>
              <a href="/favoritos" className="text-lg font-medium hover:underline">
                Favoritos
              </a>
            </nav>

            <div
              className="flex-1 bg-black/30"
              onClick={() => setOpen(false)}
            />
          </aside>
        )}

        {/* CONTEÚDO */}
        <main className="pt-10 px-6">
          {children}
        </main>

      </body>
    </html>
  );
}