"use client";
import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartOffcanvas() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartCanvas">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Seu Carrinho</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name}
                  <div>
                    <span className="me-3">R$ {item.price.toFixed(2)}</span>
                    <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(index)}>✕</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h5>Total: R$ {total.toFixed(2)}</h5>
              <button className="btn btn-warning w-100 mt-3" onClick={clearCart}>Esvaziar Carrinho</button>
              <button className="btn btn-success w-100 mt-2">Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
        