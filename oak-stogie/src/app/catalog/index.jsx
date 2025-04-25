"use client";
import React, { use, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useCart } from "@/context/CartContext";

const { addToCart, Cart} = useCart();

const [cart,setCart] = useState ([]);

const handleAddToCart = (product) => {
    setCart ((prev) => [...prev,product]);
};

const allproducts=[
    {
        name:"Dom de Havana",
        description: "  Um tributo ao legado cubano. Com folhas envelhecidas por 7 anos, entrega um sabor encorpado com notas de cacau e couro.Ideal para noites longas e conversas profundas",
        image : "",
        price :  "79.90",
    },
    {
        name: "La Noche Fina",
        description: " Charuto de capa escura e brilho aveludado, criado para os momentos mais elegantes. Possui um blend balanceado de tabacos dominicanos com toque de baunilha e especiarias.",
        image: "",
        price: "59.90",
      },
      {
        name: "Gran Reserva del Fuego",
        description: "Uma edição limitada feita com tabacos de safras raras. Corpo médio para forte, com um toque picante no final. Feito para quem aprecia intensidade com elegância",
        image: "",
        price: "89.90",
      },
      {
        name: "Capa de Oro",
        description: " Seu nome vem da capa dourada e perfeita. Aroma suave e sabor levemente adocicado, com toques de mel e amêndoas. Ideal para quem busca um luxo discreto.",
        image: "",
        price: "109.90"
      },
];

export default function Catalog() {
    const [priceRange, setPriceRange] = useState("all");

    const filteredProducts = allproducts.filter ((product) => {
        if (priceRange === "under50" ) return product.price < 50;
        if (priceRange === "50to80") return product.price >= 50 && product.price <=80;
        if (priceRange === "above80") return product.price > 80 ;
        return true;
    });

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">nosso catalogo de charutos </h2>

            <div className="mb-4 d-flex gap-3 justify-content-center">
        <select
          className="form-select w-auto"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">Todos os preços</option>
          <option value="under50">Até R$ 50</option>
          <option value="50to80">R$ 50 a R$ 80</option>
          <option value="above80">Acima de R$ 80</option>
        </select>
      </div>

      <div className="alert alert-info">
  <strong>Carrinho:</strong> {cart.length} item(s)
  <ul className="mb-0">
    {cart.map((item, index) => (
      <li key={index}>{item.name} - R$ {item.price.toFixed(2)}</li>
    ))}
  </ul>
</div>

            <div className= "row">  
                {products.map((product,index) => (
                   <ProductCard key={index} {...product} onAddToCart={addToCart} />
               ))}
            </div>
        </div>

        
    );
}