"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "./home.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorParticles, setCursorParticles] = useState([]);
  const [sideParticles, setSideParticles] = useState([]);

  // Efeito do cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setCursorParticles((prev) => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 20 + 60, // 60-80px
        },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const brands = [
    { id: 1, name: "Marca A", path: "b1.png" },
    { id: 2, name: "Marca B", path: "b7.png" },
    { id: 3, name: "Marca C", path: "b3.png" },
    { id: 4, name: "Marca D", path: "b4.png" },
    { id: 5, name: "Marca E", path: "b5.png" },
    { id: 6, name: "Marca F", path: "b6.png" },
  ];

  const produtos = [
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
  ];

  return (
    <>
      <main className="parallax_placeholder">
        <div className="container-fluid d-flex justify-content-center align-items-center p-0 container-imagem-home">
          <img
            className="img-fluid imagem-principal mx-auto" // mx-auto para centralizar
            src="/imagem-home/downloadedImage (7).png"
            alt="Imagem Principal"
          />

          {/* Partículas do cursor */}
          {cursorParticles.map((particle) => (
            <div
              key={particle.id}
              className="cursor-smoke"
              style={{
                left: `${particle.x - 25}px`,
                top: `${particle.y - 75}px`,
                width: `60px`,
                height: `60px`,
              }}
            />
          ))}
        </div>
      </main>

      {/*--------------marcas que trabalhamos*/}
      <section className="container my-5 text-white">
        <h2 className="text-center mb-4 corleone-font h3 frase-brand">
          Juntos de quem compartilha nossa paixão por qualidade, tradição e
          prestígio.
        </h2>

        <div className="row justify-content-center align-items-center g-3">
          {brands.map((brand) => (
            <div key={brand.id} className="col-4 col-sm-3 col-md-2">
              <div className="card border-0 shadow-sm bg-transparent">
                <img
                  src={`/brands/${brand.path}`}
                  alt={`Marca ${brand.name}`}
                  className="img-fluid card-img-top logo-parceira p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS DO HOME */}
     
      <section className="berkervville-font container-fluid py-5">
  <div className="container">
    <h2 className="mb-4 corleone-font h1 text-light">Charutos em Destaque</h2>
    <div className="row">
      {produtos.slice(0, 4).map((produto) => (
        <div className="col-md-6 col-lg-3 mb-4" key={produto.id}>
          <div className="card h-100  text-light position-relative">
            <div className="imagem-container">
              <img
                src={produto.image}
                className="card-img-top"
                alt={produto.name}
                style={{
                  width: "100%",
                  height: "100%", // Faz com que a imagem ocupe todo o espaço disponível
                  objectFit: "cover", // A imagem preenche totalmente o card sem distorcer
                }}
              />
              <span className="heart-icon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{produto.name}</h5>
              
              <div className="d-flex flex-column justify-content-end" style={{ flexGrow: 1 }}>
                <Link
                  href={`/Produtos/${produto.id}`}
                  className="btn btn-outline-light mb-2"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </Link>
                <button className="btn btn-outline-light w-100">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>






      {/* BANNER COM PRODUTOS */}
      <section className="container-fluid position-relative d-flex justify-content-center mt-20 pt-5">
        <img
          src="/image-sections-page/grupo_amigos.png"
          alt=""
          className="img-fluid w-50 "
        />

        <div className="position-absolute  top-50 start-50 translate-middle text-center text-white">
          <h1 class="display-4 fw-bold corleone-font">
            Descubra o Sabor da Exclusividade
          </h1>
          <a
            href="#"
            class="btn btn-danger mt-3 fw-semibold shadow berkervville-font"
          >
            Conheça a Edição Capadeoro
          </a>
        </div>
      </section>

      <div className="d-flex gap-3 justify-content-center m-10">
        <a href="/produtos" className="btn btn-outline-light">
          Veja Mais
        </a>
      </div>
    </>
  );
}
