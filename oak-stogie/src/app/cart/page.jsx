"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Seu Carrinho</h2>

      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - R$ {item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)} className="btn btn-sm btn-danger">Remover</button>
              </li>
            ))}
          </ul>
          <h5>Total: R$ {total.toFixed(2)}</h5>
          <button className="btn btn-warning mt-3" onClick={clearCart}>Esvaziar carrinho</button>
        </>
      )}
    </div>
  );
}
