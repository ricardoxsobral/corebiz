import React, { useState } from 'react';
import './Newsletter.css';
import { Container } from '@mui/material';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateName = () => {
    if (name.trim().split(' ').length < 2) {
      setNameError('Preencha com seu nome completo');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Preencha com um e-mail válido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (!isNameValid || !isEmailValid) {
      return;
    }

    const subscriber = { name, email };
    
    try {
      const response = await fetch('http://localhost:3002/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscriber)
      });
      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }
      console.log('Inscrição realizada com sucesso!');
      setSubmitted(true);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const handleReturn = () => {
    setSubmitted(false);
  };

  return (
    <div className='Newsletter'>
      <Container>
        {!submitted && (
          <div className="news-content">
            <div className="item-news title">
              <div className="news-title">
                <h3>Participe de nossas news com promoções e novidades!</h3>
              </div>
            </div>
            <div className="item-news form">
              <form className='inputs' onSubmit={handleSubmit}>
                <div className="input text">
                  <input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    onBlur={validateName}
                  />
                  {nameError && <span className="error">{nameError}</span>}
                </div>
                <div className="input email">
                  <input 
                    type="email" 
                    placeholder='Digite seu email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    onBlur={validateEmail}
                  />
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                <div className="input submit">
                  <input type="submit" value='Eu quero!'/>
                </div>
              </form>
            </div>
          </div>
        )}
        {submitted && (
          <div className="success-message">
            <p>Formulário enviado com sucesso!</p>
            <button onClick={handleReturn}>Voltar para o formulário</button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Newsletter;
