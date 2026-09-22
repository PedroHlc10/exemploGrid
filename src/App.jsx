import React from 'react';
import Saudacao from './Saudacao';

function App() {
  return (
    <div className="bg-light min-vh-100 py-4">
      {/* Container principal para centralizar e dar alinhamento */}
      <div className="container">
        
        {/* Cabeçalho */}
        <header className="row mb-4">
          <div className="col text-center">
            <h1 className="display-5 fw-bold text-primary">Exercicio PW2</h1>
            <p className="lead text-secondary">
              Exercicios previstos no teams de PW2
            </p>
          </div>
        </header>

        {/* Seção Principal: 3 Cards Responsivos */}
        <main className="row g-4 mb-4">
          {/* Coluna 1: Ocupa 12 colunas em telas pequenas, 4 colunas em telas médias+ */}
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h2 className="h5 card-title text-success">Exercicio 1</h2>
                <p className="card-text">
                  < Saudacao 
                  nome = "Pedro"/>
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h2 className="h5 card-title text-success">Coluna 2</h2>
                <p className="card-text">
                  O sistema de Grid do Bootstrap se baseia em um total de 12 colunas por linha (`row`).
                </p>
              </div>
            </div>
          </div>

         
        </main>

        {/* Rodapé */}
        <footer className="row mt-5">
          <div className="col text-center text-muted">
            <small>&copy; {new Date().getFullYear()} Meu Projeto React. Todos os direitos reservados.</small>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
