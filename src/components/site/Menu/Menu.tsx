"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="topo d-flex align-items-center justify-content-between px-3 py-2">
      {/* Logotipo */}
      <div className="topo-logotipo">
        <Image
          src="/img/logotipo.png"
          alt="Rhaian Alvarado"
          width={120}
          height={80}
          className="img-fluid rounded"
        />
      </div>

      {/* Menu Desktop */}
      <nav className="menu-desktop d-none d-md-flex">
        <li><Link href="#"><i className="bi bi-house-door-fill me-2"></i>Início</Link></li>
        <li><Link href="#sobrenos"><i className="bi bi-person-fill me-2"></i>Sobre Nós</Link></li>
        <li><Link href="#servicos"><i className="bi bi-scissors me-2"></i>Serviços</Link></li>
        <li><Link href="#promo"><i className="bi bi-tags-fill me-2"></i>Promoções</Link></li>
      </nav>

      {/* Botão de Agendamento (desktop) */}
      <div className="button-agendamento d-none d-md-block">
        <Link href="/agendar">
          <button>
            <i className="bi bi-calendar-check-fill me-2"></i>Agendamento
          </button>
        </Link>
      </div>

      {/* Ícone do Menu Hamburguer (mobile) */}
      <div className="hamburguer d-md-none" onClick={() => setMenuAberto(!menuAberto)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="menu-mobile position-absolute top-100 start-0 w-100">
          <ul>
            <li><Link href="#" onClick={() => setMenuAberto(false)}><i className="bi bi-house-door-fill me-2"></i>Início</Link></li>
            <li><Link href="#sobrenos" onClick={() => setMenuAberto(false)}><i className="bi bi-person-fill me-2"></i>Sobre Nós</Link></li>
            <li><Link href="#servicos" onClick={() => setMenuAberto(false)}><i className="bi bi-scissors me-2"></i>Serviços</Link></li>
            <li><Link href="#promo" onClick={() => setMenuAberto(false)}><i className="bi bi-tags-fill me-2"></i>Promoções</Link></li>
            <li>
              <Link href="/agendar" onClick={() => setMenuAberto(false)}>
                <button>
                  <i className="bi bi-calendar-check-fill me-2"></i>Agendamento
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Menu;
