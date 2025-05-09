"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import '../produtos.css'

// Simulando os dados do produto (depois você pode puxar de um backend ou JSON)
const produtos = [
  { id: 1, name: "Capa de Oro", price: 999.99, image: "/image_charutos_carousel/capadeoro.png" },
  { id: 2, name: "La Noche Fina", price: 399.99, image: "/image_charutos_carousel/Lanochefina.png" },
  { id: 3, name: "Dom de Havana", price: 799.99, image: "/image_charutos_carousel/Domdehavana.png" },
  { id: 4, name: "Gran Reserva del Fuego", price: 699.99, image: "/image_charutos_carousel/Granreservadelfuego.png" },
  { id: 5, name: "Senhor Robusto", price: 299.99, image: "/image_charutos_carousel/senhorrobusto.png" },
  { id: 6, name: "Conde Del Tabaco", price: 499.99, image: "/image_charutos_carousel/condedeltabaco.png" },
  { id: 7, name: "Don Herrera", price: 599.99, image: "/image_charutos_carousel/donherrera.png" },
  { id: 8, name: "El Toro Fino", price: 459.99, image: "/image_charutos_carousel/condedeltabaco.png" },
  { id: 9, name: "La Cabana Vieja", price: 259.99, image: "/image_charutos_carousel/senhorrobusto.png" },
  { id: 10, name: "Monte de Lujo", price: 299.99, image: "/image_charutos_carousel/capadeoro.png" },
  { id: 11, name: "Dulce Capa", price: 599.99, image: "/image_charutos_carousel/donherrera.png" },
  { id: 12, name: "Nevoa Dourada", price: 499.99, image: "/image_charutos_carousel/condedeltabaco.png" },
];

export default function ProdutoPage() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));
  const [quantidade, setQuantidade] = useState(1);

  if (!produto) return <p>Produto não encontrado.</p>;

  const aumentar = () => setQuantidade(q => q + 1);
  const diminuir = () => setQuantidade(q => Math.max(1, q - 1));

  return (
    <div className="container py-5 berkervville-font">
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
          <h1 className="text-light corleone-font">{produto.name}</h1>
          
          {/* Avaliação */}
          <div className="mb-3">
            <FontAwesomeIcon icon={solidStar} className="text-warning me-1" />
            <FontAwesomeIcon icon={solidStar} className="text-warning me-1" />
            <FontAwesomeIcon icon={solidStar} className="text-warning me-1" />
            <FontAwesomeIcon icon={solidStar} className="text-warning me-1" />
            <FontAwesomeIcon icon={regularStar} className="text-warning" />
          </div>

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
          <button className="btn btn-outline-light btn-lg">Comprar</button>
          <br />
          <Link href="/Produtos" className="d-block mt-3 text-danger text-decoration-none">← Voltar para produtos</Link>
        </div>
      </div>
    </div>
  );
}
