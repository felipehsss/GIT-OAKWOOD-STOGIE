"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "./home.css";


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorParticles, setCursorParticles] = useState([]);
  const [sideParticles, setSideParticles] = useState([]);

  // Efeito do cursor ssssssssssssssss
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setCursorParticles(prev => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 20 + 60 // 60-80px
        }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // // Efeito das fumaças laterais
  // useEffect(() => {
  //   const createSideParticles = () => {
  //     const container = document.querySelector('.container-imagem-home');
  //     if (!container) return;
      
  //     const containerRect = container.getBoundingClientRect();
  //     const newParticles = [];

  //     // Fumaça da esquerda (mais próxima da imagem)
  //     newParticles.push({
  //       id: `left-${Date.now()}`,
  //       startX: containerRect.left + 30,
  //       startY: containerRect.top + containerRect.height * 0.7,
  //       direction: 'right',
  //       size: 120
  //     });

  //     // Fumaça da direita (posição ajustada para visibilidade)
  //     newParticles.push({
  //       id: `right-${Date.now()}`,
  //       startX: containerRect.right - 50,  // Aumentei a distância da borda
  //       startY: containerRect.top + containerRect.height * 0.65,  // Subi um pouco
  //       direction: 'left',
  //       size: 140  // Aumentei o tamanho
  //     });

  //     setSideParticles(prev => [...prev.slice(-10), ...newParticles]);

  //     const interval = setInterval(createSideParticles, 4000);
  //     return () => clearInterval(interval);
  //   };

  //   const timeout = setTimeout(createSideParticles, 1000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      <main className="parallax_placeholder">
        <div className="container-fluid d-flex justify-content-center align-items-center p-0 container-imagem-home">
          <img
            className="img-fluid imagem-principal mx-auto"  // mx-auto para centralizar
            src="/imagem-home/downloadedImage (7).png"
            alt="Imagem Principal"
          />
          {/* Partículas do cursor */}
          {cursorParticles.map((particle) => (
            <div 
              key={particle.id}
              className="cursor-smoke"
              style={{
                left: `${particle.x - 30}px`,
                top: `${particle.y - 30}px`,
                width: `60px`,
                height: `60px`,
              }}
            />
          ))}
          {/* Fumaças laterais
          {sideParticles.map((particle) => (
            <div 
              key={particle.id}
              className={`side-smoke ${particle.direction}`}
              style={{
                left: `${particle.startX}px`,
                top: `${particle.startY}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          ))} */}
        </div>
      </main>
    </>
  );
}
