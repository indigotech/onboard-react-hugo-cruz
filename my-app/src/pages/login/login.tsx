import React from 'react';

export class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <h1 className="Title">Bem-vindo(a) à Taqtile!</h1>
        <form>
          <label> E-mail: </label><br />
          <input 
            type="text"
            name="email" 
          /><br />
          <label> Senha: </label><br />
          <input 
            type="text"
            name="password" 
          /><br />
          <button
            type="submit"
            className="Button"
          > 
            Entrar 
          </button><br />
        </form>
      </div>
    );
  }
}
