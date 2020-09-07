import React from 'react';

export class Login extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Bem-vindo(a) à Taqtile!</h1>
        </div>
        <form className="Login" id="login">
          <div className="FormControl">
            <label>E-mail:</label>
            <input 
              type="text"
              id="email" 
            />
          </div>
          <div className="FormControl">
            <label>Senha:</label>
            <input 
              type="text" 
              id="password" 
            />
          </div>
          <button 
            type="submit" 
            className="FormButton"
          >
            Entrar 
          </button>
        </form>
      </div>
    );
  }
}
