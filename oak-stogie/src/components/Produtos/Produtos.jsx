"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Produtos.css";

const productsData = [
    {
        id: 1,
        name: "Produto 1",
        price: 29.99,
        image: "/imagem-home/downloadedImage (3).png",
    },
    {
        id: 2,
        name: "Produto 2",
        price: 49.99,
        image: "/imagem-home/downloadedImage (4).png",
    },
    {
        id: 3,
        name: "Produto 3",
        price: 19.99,
        image: "/imagem-home/downloadedImage (5).png",
    },
    {
        id: 4,
        name: "Produto 4",
        price: 39.99,
        image: "/imagem-home/downloadedImage (6).png",
    },
    {
        id: 5,
        name: "Produto 5",
        price: 29.99,
        image: "/imagem-home/downloadedImage (3).png",
    },
    {
        id: 6,
        name: "Produto 6",
        price: 49.99,
        image: "/imagem-home/downloadedImage (4).png",
    },
    {
        id: 7,
        name: "Produto 7",
        price: 19.99,
        image: "/imagem-home/downloadedImage (5).png",
    },
    {
        id: 8,
        name: "Produto 8",
        price: 39.99,
        image: "/imagem-home/downloadedImage (6).png",
    },
    {
        id: 9,
        name: "Produto 9",
        price: 29.99,
        image: "/imagem-home/downloadedImage (3).png",
    },
    {
        id: 10,
        name: "Produto 10",
        price: 49.99,
        image: "/imagem-home/downloadedImage (4).png",
    },
    {
        id: 11,
        name: "Produto 11",
        price: 19.99,
        image: "/imagem-home/downloadedImage (5).png",
    },
    {
        id: 12,
        name: "Produto 12",
        price: 39.99,
        image: "/imagem-home/downloadedImage (6).png",
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
