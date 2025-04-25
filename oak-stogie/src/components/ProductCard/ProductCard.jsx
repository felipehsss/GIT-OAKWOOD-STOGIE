"use client";
import React from "react";


<ProductCard key={index} {...product} onAddToCart={handleAddToCart} />



export default function ProductCard({ image, name, description, price, onAddToCart }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <span className="text-muted fw-bold">R$ {price}</span>
            <button className="btn btn-dark btn-sm" onClick={() => onAddToCart({ name, price })}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    );
  }
