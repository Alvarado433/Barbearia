import React from 'react';
import Image from 'next/image';

const Promo = () => {
  return (
    <section id="promo" className="promocoes py-5 bg-light">
      <div className="container">
        <h2 className="titulo-efeito text-center mb-5">Nossas Promoções</h2>

        {/* Carrossel de Promoções */}
        <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* Item 1 */}
            <div className="carousel-item active">
              <div className="row">

                {/* Promo 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm border-0 rounded">
                    <Image src="https://placehold.co/100x100" alt="Promoção 1" width={400} height={250} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Corte e Barba Completo</h5>
                      <p className="card-text">Aproveite nossa promoção exclusiva: Corte de cabelo + Barba por um preço especial!</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary">Saiba mais</a>
                        <i className="bi bi-scissors"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promo 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm border-0 rounded">
                    <Image src="https://placehold.co/100x100" alt="Promoção 2" width={400} height={250} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Desconto para Novos Clientes</h5>
                      <p className="card-text">Primeira visita? Ganhe 20% de desconto em todos os serviços!</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary">Saiba mais</a>
                        <i className="bi bi-gift"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promo 3 */}
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm border-0 rounded">
                    <Image src="https://placehold.co/100x100" alt="Promoção 3" width={400} height={250} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Pacote VIP</h5>
                      <p className="card-text">Aproveite nosso pacote VIP para serviços mensais com preços exclusivos.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary">Saiba mais</a>
                        <i className="bi bi-person-check"></i>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Item 2 */}
            <div className="carousel-item">
              <div className="row">

                {/* Promo 4 */}
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm border-0 rounded">
                    <Image src="https://placehold.co/100x100" alt="Promoção 4" width={400} height={250} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Corte Estilo</h5>
                      <p className="card-text">Experimente novos estilos de cortes com um preço super acessível!</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary">Saiba mais</a>
                        <i className="bi bi-scissors"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promo 5 */}
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm border-0 rounded">
                    <Image src="https://placehold.co/100x100" alt="Promoção 5" width={400} height={250} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Hidratação Completa</h5>
                      <p className="card-text">Pacote de hidratação para cabelos e barba para revitalizar seu visual!</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary">Saiba mais</a>
                        <i className="bi bi-shower"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promo 6 */}
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm border-0 rounded">
                    <Image src="https://placehold.co/100x100" alt="Promoção 6" width={400} height={250} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Promoção Pacote Completo</h5>
                      <p className="card-text">Corte + Barba + Hidratação com desconto especial para clientes fidelizados!</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary">Saiba mais</a>
                        <i className="bi bi-person-check"></i>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Controles do Carrossel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>

        {/* Contagem Regressiva */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3>Oferta por tempo limitado!</h3>
            <div id="countdown" className="display-4">
              <span id="days">00</span>:<span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
