import React from 'react';
import Image from 'next/image';

export default function Servico() {
  return (
    <section className="servicos" id="servico">
      <div className="container">
        <h2 className="titulo-servicos">Nossos Serviços</h2>
        <div className="cards-servicos">
          <div className="card-servico">
            <a href="#corte">
              <Image src="https://placehold.co/100x100" alt="Corte Masculino" width={100} height={100} />
              <h3>Corte Masculino</h3>
              <p>Corte na tesoura ou máquina, do jeito que você gosta. Com finalização e estilo profissional.</p>
            </a>
          </div>

          <div className="card-servico">
            <a href="#degrade">
              <Image src="https://placehold.co/100x100" alt="Corte Degradê" width={100} height={100} />
              <h3>Corte Degradê</h3>
              <p>Fade detalhado com precisão e estilo. Ideal para quem quer um visual moderno e alinhado.</p>
            </a>
          </div>

          <div className="card-servico">
            <a href="#barba">
              <Image src="https://placehold.co/100x100" alt="Barba" width={100} height={100} />
              <h3>Barba com Navalha</h3>
              <p>Alinhamento com toalha quente e acabamento com navalha. Um cuidado especial para sua barba.</p>
            </a>
          </div>

          <div className="card-servico">
            <a href="#corte-infantil">
              <Image src="https://placehold.co/100x100" alt="Corte Infantil" width={100} height={100} />
              <h3>Corte Infantil</h3>
              <p>Cortes estilosos para os pequenos, com um atendimento paciente e descontraído.</p>
            </a>
          </div>

          <div className="card-servico">
            <a href="#militar">
              <Image src="https://placehold.co/100x100" alt="Corte Militar" width={100} height={100} />
              <h3>Corte Militar</h3>
              <p>Estilo mais tradicional e prático, com acabamento limpo e rápido.</p>
            </a>
          </div>

          <div className="card-servico">
            <a href="#bigode">
              <Image src="https://placehold.co/100x100" alt="Aparar Bigode" width={100} height={100} />
              <h3>Aparar Bigode</h3>
              <p>Acabamento preciso no bigode para complementar seu estilo com elegância.</p>
            </a>
          </div>

          <div className="card-servico">
            <a href="#combo">
              <Image src="https://placehold.co/100x100" alt="Combo Corte e Barba" width={100} height={100} />
              <h3>Combo Corte + Barba</h3>
              <p>O pacote mais procurado! Visual completo com corte e barba alinhada por um preço especial.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
