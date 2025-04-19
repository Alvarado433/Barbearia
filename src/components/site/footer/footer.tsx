import React from 'react';

const Footer = () => {
  return (
    <footer className="rodape bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="footer-title">Barbearia Alvarado</h4>
            <p>
              Profissionais especializados em cortes de cabelo e barba. Oferecemos um atendimento de qualidade para realçar sua identidade.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Sobre Nós</a></li>
              <li><a href="#" className="text-white">Serviços</a></li>
              <li><a href="#" className="text-white">Promoções</a></li>
              <li><a href="#" className="text-white">Contato</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-3 social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-3 social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-3 social-icon"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>&copy; 2025 Barbearia Alvarado. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
