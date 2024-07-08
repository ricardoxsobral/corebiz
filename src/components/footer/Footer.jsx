import Container from '@mui/material/Container';

import iconFone from '../../assets/icon-fone.png'
import iconMessage from '../../assets/icon-message.png'
import iconCorebiz from '../../assets/corebiz-branco.png'
import iconVetex from '../../assets/vetex.png'

import './Footer.css'

function Footer() {

  return (
    <>
      <div className='Footer'>
        <Container>
          <div className="footer-content">
            <div className="footer-item info">
              <h1>Localização</h1>
              <hr />
              <div className="info-item addres">
                <span>Avenida Andrômeda, 2000. Bloco 6 e 8 <br /> </span>
                <span>Alphaville - SP</span>
              </div>
              <div className="info-item email">
                <span>brasil@corebiz.ag</span>
              </div>
              <div className="info-item telephone">
                <span>+55 11 3090 1039</span>
              </div>
            </div>
            <div className="footer-item cta">
              <div className="btn-cta">
                <div className="icon">
                  <img src={iconMessage} alt="icon-message" />
                </div>
                <div className="text">
                  <span>ENTRE EM CONTATO</span>
                </div>
              </div>
              <div className="btn-cta">
                <div className="icon">
                  <img src={iconFone} alt="icon-message" />
                </div>
                <div className="text">
                  <span className='text1'>FALE COM NOSSO</span>
                  <span>CONSULTOR ONLINE</span>
                </div>
              </div>
            </div>
            <div className="footer-item">
              <div className="logo-footer">
                <div className="logo">
                  <span>Created by </span>
                  <img src={iconCorebiz} alt="corebiz-white-logo" />
                </div>
                <div className="logo">
                  <img src={iconVetex} alt="vetex-logo" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
