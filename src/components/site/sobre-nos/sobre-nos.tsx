import React from 'react';
import Image from "next/image";

const Sobrenos = () => {
  return (
    <section id="sobrenos" className="sobrenos">
      <div className="container">
        <h2 className="titulo-efeito">Sobre Nós</h2>
        <div className="conteudo-sobrenos">
          <div className="texto">
            <p>
              Na <strong>Barbearia Alvarado</strong>, tradição e estilo se encontram para oferecer a você a melhor experiência em cortes masculinos, barba e cuidados pessoais. Com uma equipe experiente e apaixonada pelo que faz, nosso compromisso é garantir que você saia sempre renovado, com autoestima lá em cima.
            </p>
            <p>
              Ambiente moderno, atendimento de qualidade e aquele papo de barbearia que a gente gosta. Aqui você não é só cliente, é da casa!
            </p>
          </div>
          <div className="imagem">
            <Image
              src="/img/foto.jpg"
              alt="Foto do salão"
              width={500}
              height={300}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobrenos;
