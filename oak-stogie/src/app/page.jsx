'use client';

import { useState } from 'react';
import Header from '../components/Header/Header';
import './home.css';

export default function Home() {
    return (
        <>
            
            <div className="container-fluid d-flex justify-content-center align-items-center p-0">
  <img
    className="img-fluid imagem-principal"
    src="/imagem-home/imagem-principal-home.jpg"
    alt="Imagem Principal"
    style={{ objectFit: 'cover', height: '100vh', width: '100%' }}
  />
</div>
        </>
    );
}