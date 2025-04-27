"use client"
export default function AgendarPage() {
  return (
    <div className="agendamento">
      <div className="icone-container">
        <i className="bi bi-calendar-event"></i>
      </div>
      <h1>Agende seu Corte!</h1>
      <p>Em breve, você poderá agendar seu corte diretamente por aqui!</p>

      <div className="informacoes">
        <div className="info-item">
          <p>Estamos trabalhando para trazer uma experiência incrível para você!</p>
        </div>

        <div className="info-item">
          <i className="bi bi-whatsapp"></i>
          <p>
            Entre em contato pelo WhatsApp:{" "}
            <a href="https://wa.me/5511949516737" target="_blank" rel="noopener noreferrer">
              <strong>+55 11 94951-6737</strong>
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .agendamento {
          text-align: center;
          padding: 50px 20px;
          background-color: #f4f4f4;
          border-radius: 10px;
          max-width: 600px;
          margin: auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .icone-container {
          font-size: 4rem;
          color: #3498db;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
        }

        .icone-container:hover {
          transform: scale(1.1);
        }

        h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          color: #34495e;
          margin: 10px 0;
        }

        .informacoes {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .info-item {
          display: flex;
          align-items: center;
          margin: 15px 0;
          font-size: 1.1rem;
          color: #7f8c8d;
        }

        .bi {
          font-size: 1.8rem;
          margin-right: 10px;
          color: #3498db;
          transition: transform 0.3s ease-in-out;
        }

        .info-item i {
          cursor: pointer;
        }

        .bi:hover {
          transform: scale(1.2);
        }

        a {
          color: #3498db;
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
