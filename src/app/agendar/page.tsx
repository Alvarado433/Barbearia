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

     
    </div>
  );
}
