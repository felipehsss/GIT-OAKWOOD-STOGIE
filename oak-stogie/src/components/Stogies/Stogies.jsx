'use client';
import { useEffect } from 'react';
import './Stogies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';






const Stogies = () => {
    useEffect(() => {
        const myCarouselElement = document.querySelector('#myCarousel');
        if (myCarouselElement && typeof window !== 'undefined') {
            import('bootstrap').then(({ Carousel }) => {
                new Carousel(myCarouselElement, {
                    interval: 4000,
                    touch: false,
                });
            });
        }
    }, []);

    return (
        <div className="container-fluid back-preto text-white">

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    
            {/* SLIDE 111 */}
            <div className="carousel-inner mt-0 p-0 vh-100 back-preto">
                <div className="carousel-item active back-preto">
                    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
                        <div className="row w-100">
                            <div className="col-6 col-md-4">
                                <img src="/image_charutos_carousel/Domdehavana.png" className="d-block w-100 img-fluid" alt="Slide 1" />
                            </div>
                            <div className="col-sm-6 col-md-8 d-flex flex-column justify-content-center text-center text-md-start">
                                <h2 className="mb-3">Dom de Havana</h2>
                                <p>
                                    Um tributo ao legado cubano. Com folhas envelhecidas por 7 anos, entrega um sabor encorpado com notas de cacau e couro.
                                    Ideal para noites longas e conversas profundas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
            {/* SLIDE 222 */}
                <div className="carousel-item">
                    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
                        <div className="row w-100">
                            <div className="col-6 col-md-4">
                                <img src="/image_charutos_carousel/Lanochefina.png" className="d-block w-100 img-fluid" alt="Slide 2" />
                            </div>
                            <div className="col-sm-6 col-md-8 d-flex flex-column justify-content-center text-center text-md-start">
                                <h2 className="mb-3">La Noche Fina</h2>
                                <p>
                                    Charuto de capa escura e brilho aveludado, criado para os momentos mais elegantes. Possui um blend balanceado de tabacos dominicanos com toque de baunilha e especiarias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
            {/* SLIDE 333 */}
                <div className="carousel-item">
                    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
                        <div className="row w-100">
                            <div className="col-6 col-md-4">
                                <img src="/image_charutos_carousel/Granreservadelfuego.png" className="d-block w-100 img-fluid" alt="Slide 3" />
                            </div>
                            <div className="col-sm-6 col-md-8 d-flex flex-column justify-content-center text-center text-md-start">
                                <h2 className="mb-3">Gran Reserva del Fuego</h2>
                                <p>
                                    Uma edição limitada feita com tabacos de safras raras. Corpo médio para forte, com um toque picante no final. Feito para quem aprecia intensidade com elegância.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
            {/* SLIDE 444 */}
                <div className="carousel-item">
                    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
                        <div className="row w-100">
                            <div className="col-6 col-md-4">
                                <img src="/image_charutos_carousel/capadeoro.png" className="d-block w-100 img-fluid" alt="Slide 4" />
                            </div>
                            <div className="col-sm-6 col-md-8 d-flex flex-column justify-content-center text-center text-md-start">
                                <h2 className="mb-3">Capa de Oro</h2>
                                <p>
                                    Seu nome vem da capa dourada e perfeita. Aroma suave e sabor levemente adocicado, com toques de mel e amêndoas. Ideal para quem busca um luxo discreto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    
        </div>
    </div>
    );
};

export default Stogies;

