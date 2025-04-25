import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './login.css';

export default function Login() {
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight font-da-primeira" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Uma Jornada de Sabor e Tradição:<br />  
                <span style={{ color: 'red' }}>Os Melhores Charutos para Você</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'white' }}>
              Explore a nossa vasta coleção de charutos premium, descubra novos sabores e aperfeiçoe o seu conhecimento sobre o universo dos charutos. Se você busca uma experiência completa, com dicas especializadas, ofertas exclusivas e um atendimento dedicado, está no lugar certo.

Cadastre-se e comece agora sua jornada rumo ao prazer do charuto perfeito. O melhor do mundo dos charutos espera por você – uma experiência que transcende o simples ato de fumar e se transforma em um ritual de apreciação e tradição.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                   

                    {/* <!-- Email input --> */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block mb-4">
                      Sign up
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button " data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <span><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></span>
                      </button>

                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
}
