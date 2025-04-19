import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-salao">
      <div className="overlay"></div>
      <div className="conteudo-banner">
        <h1>Onde seu estilo encontra atitude</h1>
        <p>Cortes modernos, barbas alinhadas e um ambiente feito pra você</p>
        <a href="#servicos" className="btn-banner">
          Conheça nossos serviços
        </a>
      </div>
    </section>
  );
};

export default Banner;
