import React from "react";
import './about.css';

export default function About() {
  return (
    <>
      <section className="sobre-nos">
        <div className="container">
          <h1>About</h1>
          <p className="lead">
            Somos uma equipe apaixonada por charutos de alta qualidade. Nosso compromisso é oferecer aos nossos clientes uma experiência única e exclusiva, com os melhores produtos do mercado. Trabalhamos incansavelmente para trazer para você os charutos mais refinados, com uma seleção cuidadosa das melhores marcas e tabacos do mundo.
          </p>
          <p className="lead">
            Com uma abordagem de excelência e sofisticação, buscamos proporcionar momentos de prazer e relaxamento a nossos clientes. Valorizamos a tradição e a cultura do charuto, e oferecemos um atendimento personalizado, para garantir que sua experiência seja a melhor possível.
          </p>

          <div className="row">
            <div className="col-lg-4">
              <h2 className="text-center">Missão</h2>
              <p>
                Oferecer os melhores charutos do mundo, com qualidade superior e atendimento personalizado para os apreciadores mais exigentes.
              </p>
            </div>
            <div className="col-lg-4">
              <h2 className="text-center">Visão</h2>
              <p>
                Ser referência no mercado de charutos, proporcionando aos nossos clientes uma experiência única, com produtos de qualidade premium e um serviço de excelência.
              </p>
            </div>
            <div className="col-lg-4">
              <h2 className="text-center">Valores</h2>
              <ul>
                <li>Qualidade Superior</li>
                <li>Tradição</li>
                <li>Exclusividade</li>
                <li>Atendimento Personalizado</li>
                <li>Respeito pela Cultura do Charuto</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-4">
            Quer saber mais ou adquirir nossos produtos exclusivos? Entre em contato conosco!
          </p>

          <div className="text-center">
            <button className="btn btn-outline-light">
              Contate-nos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
