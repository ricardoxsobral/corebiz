import './Newsletter.css';
import { Container } from '@mui/material';

function Newsletter() {
  return (
    <div className='Newsletter'>
      <Container>
        <div className="news-content">
          <div className="item-news title">
            <div className="news-title">
              <h3>Participe de nossas news com promoções e novidades!</h3>
            </div>
          </div>
          <div className="item-news form">
            <form className='inputs'>
              <div className="input text">
                <input type="text" placeholder='Digite seu nome'/>
              </div>
              <div className="input email">
                <input type="email" placeholder='Digite seu email'/>
              </div>
              <div className="input submit">
                <input type="submit" value='Eu quero!'/>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Newsletter;
