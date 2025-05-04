"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Simulando os dados do produto (depois você pode puxar de um backend ou JSON)
const produtos = [
  {
    id: 1,
    name: "Capa de Oro",
    price: 999.99,
    description: "Um charuto premium com notas amadeiradas e toque de ouro.",
    image: "/image_charutos_carousel/capadeoro.png",
  },
  {
    id: 2,
    name: "La Noche Fina",
    price: 399.99,
    description: "Charuto elegante para noites especiais.",
    image: "/image_charutos_carousel/Lanochefina.png",
  },
  // outros produtos...
];

export default function ProdutoPage() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));
  const [quantidade, setQuantidade] = useState(1);

  if (!produto) return <p>Produto não encontrado.</p>;

  const aumentar = () => setQuantidade(q => q + 1);
  const diminuir = () => setQuantidade(q => Math.max(1, q - 1));

  return (
    <div className="container py-5">
      <div className="row">
        {/* Imagem */}
        <div className="col-md-6 text-center">
          <Image
            src={produto.image}
            alt={produto.name}
            width={400}
            height={400}
            className="img-fluid"
          />
        </div>

        {/* Info do Produto */}
        <div className="col-md-6">
          <h1>{produto.name}</h1>
          <p className="text-muted">Código: {produto.id}</p>
          <h3 className="text-danger">R$ {produto.price.toFixed(2)}</h3>

          <p className="mt-4">{produto.description}</p>

          {/* Quantidade */}
          <div className="d-flex align-items-center mb-3">
            <button onClick={diminuir} className="btn btn-outline-secondary">−</button>
            <span className="mx-3">{quantidade}</span>
            <button onClick={aumentar} className="btn btn-outline-secondary">+</button>
          </div>

          {/* Botão Comprar */}
          <button className="btn btn-dark btn-lg">Comprar</button>
          <br />
          <Link href="/" className="d-block mt-3 text-decoration-none">← Voltar para produtos</Link>
        </div>
      </div>
    </div>
  );
}
