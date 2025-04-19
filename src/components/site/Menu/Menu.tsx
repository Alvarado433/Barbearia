"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  // Função para o agendamento (com notificação personalizada)
  const agendamento = () => {
    setMostrarMensagem(true); // Exibe a mensagem personalizada
    setTimeout(() => setMostrarMensagem(false), 3000); // Fecha a mensagem após 3 segundos
  };

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
          <li><Link href="#">Início</Link></li>
          <li><Link href="#sobrenos">Sobre Nós</Link></li>
          <li><Link href="#servicos">Serviços</Link></li>
          <li><Link href="#promo">Promoções</Link></li>
        </ul>
      </nav>

      <div className="button">
        <Link href="#" onClick={agendamento} className="btn btn-primary">
          Agendamento
        </Link>
      </div>

      {/* Exibindo a mensagem personalizada */}
      {mostrarMensagem && (
        <div className="alert alert-info fixed-top" role="alert">
          Agendamento em breve! Fique ligado.
        </div>
      )}

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
                <Link className="nav-link" href="#">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#sobrenos">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#servicos">Serviços</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#promo">Promoções</Link>
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
