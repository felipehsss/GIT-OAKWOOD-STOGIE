import React from "react";
import './Questions.css';



const Questions = () => {
    return (
<<<<<<< HEAD
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
=======
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
>>>>>>> 17ec5bd826ea013a6c8251a616470fd4e75c3773
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