"use client";
import React, { useState } from "react";
import styles from "./pagamento.module.css";

export default function PagamentoPage() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Pagamento processado com sucesso!");
    };

    
    const formatCardNumber = (num) => {
        return num.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    };

    
    const formatExpiry = (value) => {
        let val = value.replace(/[^\d\/]/g, '');
        if (val.length === 2 && !val.includes('/')) {
            val = val + '/';
        }
        if (val.length > 7) {
            val = val.slice(0, 7);
        }
        return val;
    };

    const handleExpiryChange = (e) => {
        const formatted = formatExpiry(e.target.value);
        setExpiry(formatted);
    };

    return (
        <div className={styles["pagamento-container"]}>
            <h1 className={styles["pagamento-title"]}>Página de Pagamento</h1>

            {paymentMethod === "card" && (
                <div className={styles["card-preview"]}>
                    <div className={styles["card-number"]} style={{ whiteSpace: "nowrap" }}>
                        {formatCardNumber(cardNumber) || "0000 0000 0000 0000"}
                    </div>
                    <div className={styles["card-row"]}>
                        <div className={styles["card-name"]}>{cardName || "NOME DO TITULAR"}</div>
                        <div className={styles["card-expiry"]}>{expiry || "MM/YYYY"}</div>
                        <div className={styles["card-cvv"]}>{cvv ? "***" : "CVV"}</div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles["payment-form"]}>
                <div className={styles["payment-methods"]}>
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={handlePaymentMethodChange}
                        />
                        Cartão de Débito/Crédito
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="pix"
                            checked={paymentMethod === "pix"}
                            onChange={handlePaymentMethodChange}
                        />
                        Pagamento via Pix
                    </label>
                </div>

                {paymentMethod === "card" && (
                    <>
                        <div className={styles["input-group"]}>
                            <label>Número do Cartão</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="0000 0000 0000 0000"
                                maxLength={19}
                                required
                            />
                        </div>
                        <div className={styles["input-group"]}>
                            <label>Nome no Cartão</label>
                            <input
                                type="text"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder="Nome Completo"
                                required
                            />
                        </div>
                        <div className={styles["input-group"]} style={{ display: "flex", gap: "1rem" }}>
                            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                <label style={{ marginBottom: "0.5rem" }}>Validade</label>
                                <input
                                    type="text"
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    required
                                    style={{ marginTop: "0.25rem" }}
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                <label style={{ marginBottom: "0.5rem" }}>CVV</label>
                                <input
                                    type="text"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="123"
                                    maxLength={3}
                                    required
                                    style={{ marginTop: "0.25rem" }}
                                />
                            </div>
                        </div>
                    </>
                )}

                {paymentMethod === "pix" && (
                    <div style={{ marginBottom: "1rem" }}>
                        <p>Escaneie o QR Code abaixo para pagar via Pix:</p>
                        <div style={{ width: "200px", height: "200px", backgroundColor: "#222", margin: "0 auto", borderRadius: "8px" }}>
                            
                            <p style={{ color: "#888", textAlign: "center", paddingTop: "90px" }}>QR Code</p>
                        </div>
                    </div>
                )}

                <button type="submit" className={styles["submit-button"]}>
                    Finalizar Pagamento
                </button>
            </form>
        </div>
    );
}
