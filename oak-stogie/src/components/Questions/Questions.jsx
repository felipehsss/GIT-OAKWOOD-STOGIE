import React from "react";
import './Questions.css';



const Questions = () => {
    return (
        <div className="accordion accordion-flush bg-danger" id="accordionFlushExample">
            <div className="accordion-item questions-background">
                <h2 className="accordion-header ">
                    <button className="text-danger accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Como conservar um charuto corretamente?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light">Charutos devem ser armazenados em um umidificador (humidor) com umidade entre 65% e 72% e temperatura em torno de 18°C a 21°C. Isso evita que fiquem secos ou úmidos demais, o que pode afetar o sabor e a queima.</div>
                </div>
            </div>
            <div className="accordion-item questions-background">
                <h2 className="accordion-header">
                    <button className="text-danger accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Quanto tempo dura um charuto depois de aceso?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light">Depende do tamanho, mas geralmente um charuto leva de 30 minutos a 1 hora e meia para ser fumado. É comum fumar devagar, dando uma tragada a cada 30 segundos a 1 minuto, para aproveitar melhor os sabores e evitar que ele esquente demais.</div>
                </div>
            </div>
            <div className="accordion-item questions-background">
                <h2 className="accordion-header">
                    <button className="text-danger accordion-button collapsed questions-background" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Por que fumar um charuto?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light">Porque alguns momentos pedem mais do que pressa — pedem presença. Fumar um charuto não é apenas acender e tragar, é um ritual. É sobre parar o tempo, saborear cada nota, cada aroma, e transformar um simples instante em algo memorável. Não é sobre hábito, é sobre experiência. E para quem sabe apreciar, cada tragada é quase como brindar à vida.</div>
                </div>
            </div>
        </div>
    );

}

export default Questions