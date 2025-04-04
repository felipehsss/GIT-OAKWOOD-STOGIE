import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <img src="/image-logo/page-2.jpeg" className="img-thumbnail" alt="Logo"></img>
            </div>
            <div className="infs">
                <div className="container text-center">
                    <div className="row align-items-end">
                        <div className="col">
                            <h1>Oakwood Stogies</h1> <br />
                            A Oakwood Stogies é uma empresa especializada na produção e comercialização de charutos premium, reconhecida por sua tradição artesanal e compromisso com a qualidade. Utilizando tabacos selecionados de regiões renomadas, a Oakwood Stogies combina técnicas clássicas com um toque contemporâneo, resultando em charutos encorpados, bem equilibrados e com sabores marcantes. Seu nome remete à robustez do carvalho (“oakwood”), refletindo a elegância e sofisticação presentes em cada produto. Ideal para apreciadores exigentes, a marca se destaca no mercado por sua autenticidade e dedicação à experiência do fumante.
                        </div>
                        <div className="col">
                            <h4>Institucional</h4>
                            <p>Sobre a Oakwood Stogies</p>
                            <p>Autenticidade dos Charutos</p>
                            <p>Blog</p>
                            <p>Como fumar charutos - Guia para iniciantes</p> <br />

                            <h4>Contato</h4>
                            <span ><FontAwesomeIcon icon={faPhone} /> (11) 99999-9999 </span> <br />
                            <span> <FontAwesomeIcon icon={faEnvelope} /> oakwood.stogies@gmail.com</span>
                        </div>
                        <div className="col">
                            <h4>Minha Conta</h4>
                            <p>Meus Pedidos</p>
                            <p>Endereço de Entrega</p>
                            <p>Alterar Dados</p>

                        </div>

                        <div className="col">
                            

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;