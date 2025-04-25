"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./produtos.css";

const productsData = [
  {
    id: 1,
    name: "Capa de Oro",
    price: 999.99,
    image: "/image_charutos_carousel/capadeoro.png",
  },
  {
    id: 2,
    name: "La Noche Fina",
    price: 399.99,
    image: "/image_charutos_carousel/Lanochefina.png",
  },
  {
    id: 3,
    name: "Dom de Havana",
    price: 799.99,
    image: "/image_charutos_carousel/Domdehavana.png",
  },
  {
    id: 4,
    name: "Gran Reserva del Fuego",
    price: 699.99,
    image: "/image_charutos_carousel/Granreservadelfuego.png",
  },
  {
    id: 5,
    name: "Senhor Robusto",
    price: 299.99,
    image: "/image_charutos_carousel/senhorrobusto.png",
  },
  {
    id: 6,
    name: "Conde Del Tabaco",
    price: 499.99,
    image: "/image_charutos_carousel/condedeltabaco.png",
  },
  {
    id: 7,
    name: "Don Herrera",
    price: 599.99,
    image: "/image_charutos_carousel/donherrera.png",
  },
  {
    id: 8,
    name: "El Toro Fino", 
    price: 459.99,
    image: "/image_charutos_carousel/condedeltabaco.png",
  },
  {
    id: 9,
    name: "La Cabana Vieja", 
    price: 259.99,
    image: "/image_charutos_carousel/senhorrobusto.png",
  },
  {
    id: 10,
    name: "Monte de Lujo",
    price: 299.99,
    image: "/image_charutos_carousel/capadeoro.png",
  },
  {
    id: 11,
    name: "Dulce Capa",
    price: 599.99,
    image: "/image_charutos_carousel/donherrera.png",
  },
  {
    id: 12,
    name: "Nevoa Dourada",
    price: 499.99,
    image: "/image_charutos_carousel/condedeltabaco.png",
  },
];

const Produtos = () => {
    const router = useRouter();
    const [quantities, setQuantities] = useState(
        productsData.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );

    const increment = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    const decrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1,
        }));
    };

    const addToCart = (id) => {
        // Navigate to payment page on add to cart
        router.push("/Pagamento");
    };

    return (

        
        <section className="produtos-section">
            <h2 className="produtos-title">Nossos Produtos</h2>
            <div className="produtos-grid">
                {productsData.map((product) => (
                    <div key={product.id} className="produto-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="produto-image"
                        />
                        <h3 className="produto-name">{product.name}</h3>
                        <p className="produto-price">R$ {product.price.toFixed(2)}</p>
                        <div className="quantidade-controls">
                            <button
                                className="quantidade-btn"
                                onClick={() => decrement(product.id)}
                            >
                                -
                            </button>
                            <span className="quantidade-value">{quantities[product.id]}</span>
                            <button
                                className="quantidade-btn"
                                onClick={() => increment(product.id)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product.id)}
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Produtos;
