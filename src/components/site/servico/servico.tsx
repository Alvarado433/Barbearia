// Servico.jsx
import React from 'react';
import Image from 'next/image';

const servicos = [
  {
    id: 'corte',
    titulo: 'Corte Masculino',
    descricao: 'Corte na tesoura ou máquina, do jeito que você gosta. Com finalização e estilo profissional.',
  },
  {
    id: 'degrade',
    titulo: 'Corte Degradê',
    descricao: 'Fade detalhado com precisão e estilo. Ideal para quem quer um visual moderno e alinhado.',
  },
  {
    id: 'barba',
    titulo: 'Barba com Navalha',
    descricao: 'Alinhamento com toalha quente e acabamento com navalha. Um cuidado especial para sua barba.',
  },
  {
    id: 'corte-infantil',
    titulo: 'Corte Infantil',
    descricao: 'Cortes estilosos para os pequenos, com um atendimento paciente e descontraído.',
  },
  {
    id: 'militar',
    titulo: 'Corte Militar',
    descricao: 'Estilo mais tradicional e prático, com acabamento limpo e rápido.',
  },
  {
    id: 'bigode',
    titulo: 'Aparar Bigode',
    descricao: 'Acabamento preciso no bigode para complementar seu estilo com elegância.',
  },
  {
    id: 'combo',
    titulo: 'Combo Corte + Barba',
    descricao: 'O pacote mais procurado! Visual completo com corte e barba alinhada por um preço especial.',
  },
];

export default function Servico() {
  return (
    <section className="servicos" id="servico">
      <div className="container">
        <h2 className="titulo-servicos">Nossos Serviços</h2>
        <div className="cards-servicos">
          {servicos.map((servico) => (
            <div key={servico.id} className="card-servico">
              <a href={`#${servico.id}`}>
                <div className="imagem-wrapper">
                  <Image
                    src="https://placehold.co/100x100.png"
                    alt={servico.titulo}
                    width={100}
                    height={100}
                  />
                </div>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
