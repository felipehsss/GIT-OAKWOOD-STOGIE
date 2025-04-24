'use client';
import { useEffect } from 'react';
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
        <div className="container mt-5">

            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

                {/* // SLIDE 111 */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-9">Dom de Havana</div>
                                <div className="col-4"><img src="public/image_charutos_carousel/downloadedImage (4).png" className="d-block w-100" alt="Slide 2" /></div>
                                <div className="col-6">Um tributo ao legado cubano. Com folhas envelhecidas por 7 anos, entrega um sabor encorpado com notas de cacau e couro. Ideal para noites longas e conversas profundas.</div>
                            </div>
                        </div>
                    </div>

                     {/* SLIDE 222/  */}
                    <div className="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-9">La Noche Fina</div>
                                <div class="col-4"><img src="public/image_charutos_carousel/downloadedImage (6).png" class="d-block w-100" alt="Slide 2" /></div>
                                <div class="col-6">Charuto de capa escura e brilho aveludado, criado para os momentos mais elegantes. Possui um blend balanceado de tabacos dominicanos com toque de baunilha e especiarias.</div>
                            </div>
                        </div>
                    </div>

                    {/* // SLIDE 333 */}
                    <div className="carousel-item">
                        <div class="container">
                            <div className="row">
                                <div className="col-9">Gran Reserva del Fuego</div>
                                <div className="col-4"><img src="public/image_charutos_carousel/downloadedImage (2).png" className="d-block w-100" alt="Slide 2" /></div>
                                <div className="col-6">Uma edição limitada feita com tabacos de safras raras. Corpo médio para forte, com um toque picante no final. Feito para quem aprecia intensidade com elegância..</div>
                            </div>
                        </div>
                    </div>

                    {/* // SLIDE 444 */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-9">Capa de Oro</div>
                                <div className="col-4"><img src="public/image_charutos_carousel/downloadedImage (1).png" className="d-block w-100" alt="Slide 2" /></div>
                                <div className="col-6">Seu nome vem da capa dourada e perfeita. Aroma suave e sabor levemente adocicado, com toques de mel e amêndoas. Ideal para quem busca um luxo discreto..</div>
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

