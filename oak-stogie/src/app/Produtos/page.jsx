"use client";
import React from "react";
import "./produtos.css";
import Link from "next/link"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const marcas = {
  Ouro: [1, 10],
  Fino: [2, 8],
  Havana: [3],
  Reserva: [4],
  Robusto: [5, 9],
  Tabaco: [6, 12],
  Herrera: [7, 11],
};

const productsSt = [
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

export default function Produtos() {
  return (
    <section className="berkervville-font container-fluid py-5">
      <div className="container">
        <h2 className="mb-4 corleone-font h1 text-light">Stogies</h2>
        {Object.entries(marcas).map(([marca, ids]) => {
          const produtosDaMarca = productsSt.filter((p) => ids.includes(p.id));
          return (
            <div key={marca} className="mb-5">
              <h4 className="mb-3 corleone-font text-danger">{marca}</h4>
              <div className="row">
                {produtosDaMarca.map((produto) => (
                  <div className="col-md-4 mb-4 " key={produto.id}>
                    <div className="card h-100">
                      <div className="imagem-container">
                        <img
                          src={produto.image}
                          className="card-img-top"
                          alt={produto.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <span className="heart-icon">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title text-light">{produto.name}</h5>
                        <p className="card-text text-danger">
                          R$ {produto.price.toFixed(2)}
                        </p>
                        <Link href={`/Produtos/${produto.id}`} className="btn btn-outline-light mb-2">
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                        </Link>
                        <button className="btn btn-outline-light w-100">
                          <FontAwesomeIcon icon={faCartPlus} /> 
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
