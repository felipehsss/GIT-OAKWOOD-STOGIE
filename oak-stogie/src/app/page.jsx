"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center p-0 container-imagem-home">
        <img
          className="img-fluid imagem-principal"
          src="/imagem-home/downloadedImage (7).png"
          alt="Imagem Principal"
          
        />
      </div>
    </>
  );
}
