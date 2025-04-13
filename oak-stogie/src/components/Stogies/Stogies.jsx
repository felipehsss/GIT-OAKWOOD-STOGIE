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
                                <div className="col-9">.col-9</div>
                                <div className="col-4"><img src="/imagem-home/imagem-principal-home.jpg" className="d-block w-100" alt="Slide 2" /></div>
                                <div className="col-6">.col-6Subsequent columns continue along the new line.</div>
                            </div>
                        </div>
                    </div>

                     {/* SLIDE 222/  */}
                    <div className="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-9">.col-9</div>
                                <div class="col-4">.col-4Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                                <div class="col-6">.col-6 Subsequent columns continue along the new line.</div>
                            </div>
                        </div>
                    </div>

                    {/* // SLIDE 333 */}
                    <div className="carousel-item">
                        <div class="container">
                            <div className="row">
                                <div className="col-9">.col-9</div>
                                <div className="col-4">.col-4Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                                <div className="col-6">.col-6 Subsequent columns continue along the new line.</div>
                            </div>
                        </div>
                    </div>

                    {/* // SLIDE 444 */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-9">.col-9</div>
                                <div className="col-4">.col-4Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                                <div className="col-6">.col-6 Subsequent columns continue along the new line.</div>
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

