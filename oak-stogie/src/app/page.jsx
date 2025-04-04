'use client';

import { useState } from 'react';
import Header from '../components/Header/Header';
import './homecharuto.css';

export default function Home() {
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center">
                <img className="img-fluid imagem-principal" src="/imagem-home/imagem-principal-home.jpg" alt="" />
            </div>
        </>
    );
}