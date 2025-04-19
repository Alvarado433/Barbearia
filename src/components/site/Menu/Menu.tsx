"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="topo fixed-top">
      <div className="topo-logotipo">
        <Image
          src="/img/logotipo.png"
          alt="Rhaian Alvarado"
          width={120}
          height={80}
          className="img-fluid rounded"
        />
      </div>

      <nav className="menu-topo d-none d-md-block">
        <ul className="d-flex justify-content-center">
          <li><a href="#">Início</a></li>
          <li><a href="#sobrenos">Sobre Nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#promo">Promoções</a></li>
        </ul>
      </nav>

      <div className="button">
        <Link href="/agendar" className="btn btn-primary">
          Agendamento
        </Link>
      </div>

      {/* Menu hamburguer (mobile) */}
      <div className="menu-hamburguer d-block d-md-none">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-controls="navbarNav"
          aria-expanded={menuAberto}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {menuAberto && (
        <div className="collapse navbar-collapse show" id="navbarNav">
          <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobrenos">Sobre Nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#promo">Promoções</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/agendar">Agendamento</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Menu;
