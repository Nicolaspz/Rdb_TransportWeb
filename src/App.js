import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Certifique-se de incluir estilos adicionais aqui
import logo from './logo.png'; // Certifique-se de salvar o logo na pasta 'src' do projeto

function App() {
  return (
    <Router>
      <div className="app">
        <header className="bg-light py-3 border-bottom">
          <div className="container d-flex justify-content-between align-items-center">
            <img src={logo} alt="RDB Transportes" className="logo" style={{ height: '50px' }} />
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-dark">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/politica" className="nav-link text-dark">Política de Privacidade</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main py-5">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/politica" element={<PoliticaPrivacidade />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4">RDB Transportes</h1>
      <p className="lead">Serviço de excelência em mobilidade individual</p>
      <p>Solicite suas entregas de forma rápida e eficiente conosco!</p>
    </div>
  );
}

function PoliticaPrivacidade() {
  return (
    <div className="politica">
      <h2 className="mb-4">Política de Privacidade</h2>
      <p>
        Bem-vindo! Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações fornecidas pelos usuários do nosso aplicativo.
      </p>
      <h3>Informações que Coletamos</h3>
      <ul>
        <li>Informações pessoais, como nome, e-mail e número de telefone.</li>
        <li>Dados de uso, como interações com o aplicativo e endereço IP.</li>
        <li>Informações técnicas sobre o dispositivo, como modelo, sistema operacional e identificadores únicos.</li>
      </ul>
      <h3>Como Usamos Suas Informações</h3>
      <ul>
        <li>Fornecer e melhorar os serviços do aplicativo.</li>
        <li>Personalizar a experiência do usuário.</li>
        <li>Enviar notificações e atualizações relevantes.</li>
        <li>Garantir a segurança e prevenir fraudes.</li>
      </ul>
      <h3>Contato</h3>
      <p>
        Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: <a href="mailto:rdbtransportesdb@gmail.com">rdbtransportesdb@gmail.com</a>.
      </p>
    </div>
  );
}

export default App;
