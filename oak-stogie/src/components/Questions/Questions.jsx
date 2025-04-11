import React from "react";
import './Questions.css';



const Questions = () => {
    return (
        <div className="accordion accordion-flush questions-container" id="accordionFlushExample">
            {/* PERGUNTA 1 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        O que significa “charuto premium”?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Feito à mão, com folhas de tabaco inteiras (sem aditivos ou tabaco picado).<br />
                        Normalmente envelhecido, de melhor qualidade e sabor mais complexo.
                    </div>
                </div>
            </div>

            {/* PERGUNTA 2 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Como armazenar charutos corretamente?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Em um umidor (caixa com controle de umidade), idealmente a 65-70% de umidade e temperatura de 18-21°C.
                    </div>
                </div>
            </div>

            {/* PERGUNTA 3 */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Qual a melhor forma de cortar um charuto?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Com um cortador de guilhotina, cortador V, ou furador.<br />
                        O corte deve ser limpo, sem danificar a capa.
                    </div>
                </div>
            </div>
        </div>



    );

}

export default Questions