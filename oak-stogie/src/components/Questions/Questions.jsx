import React from "react";
import './Questions.css';



const Questions = () => {
    return (
        <div class="accordion accordion-flush questions-container " id="accordionFlushExample">
            <div class="accordion-item ">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    O que significa “charuto premium”?
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Feito à mão, com folhas de tabaco inteiras (sem aditivos ou tabaco picado).<br></br>Normalmente envelhecido, de melhor qualidade e sabor mais complexo.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Como armazenar charutos corretamente?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Em um umidor (caixa com controle de umidade), idealmente a 65-70% de umidade e temperatura de 18-21°C.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Qual a melhor forma de cortar um charuto?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Com um cortador de guilhotina, cortador V, ou furador.<br></br> O corte deve ser limpo, sem danificar a capa.</div>
                </div>
            </div>
        </div>
    );

}

export default Questions