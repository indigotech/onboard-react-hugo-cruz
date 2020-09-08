import React from 'react';

export class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Bem-vindo(a) à Taqtile!</h1>
        </div>
        <form className="login" id="login">
          <div className="formControl">
            <label>E-mail:</label>
            <input 
              type="text"
              name="email" 
            />
          </div>
          <div className="formControl">
            <label>Senha:</label>
            <input 
              type="text" 
              name="password" 
            />
          </div>
          <button 
            type="submit" 
            className="formButton"
          >
            Entrar 
          </button>
        </form>
      </div>
    );
  }
}
