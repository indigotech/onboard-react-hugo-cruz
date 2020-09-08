import React from 'react';

interface LoginState {
  email: string;
  password: string;
}

export class Login extends React.Component<{}, LoginState> {

  state: LoginState = { email: '', password: '' };
 
  private  handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  }

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
              value={this.state.email} 
              onChange={this.handleInput}
            />
          </div>
          <div className="formControl">
            <label>Senha:</label>
            <input 
              type="text" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleInput}
            />
          </div>
          <button 
            type="submit" 
            className="formButton"
            //onClick={this.handleButtonClick}
          >
            Entrar 
          </button>
        </form>
      </div>
    );
  }
}
