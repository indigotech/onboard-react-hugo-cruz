import React from 'react';

interface LoginPageState {
  email: string;
  password: string;
}

export class LoginPage extends React.Component<{}, LoginPageState> {

  constructor (props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    const passwordRegex = /(?=.*\d)(?=.*[a-zA-Z]).*$/;
    return password.length > 6 && passwordRegex.test(password);
  }
 
  private handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value } as Pick<LoginPageState, keyof LoginPageState>);
  }

  private handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!this.validateEmail(this.state.email)) {
      alert('Email inválido')
    } 
    
    if (!this.validatePassword(this.state.password)) {
      alert('Senha inválida')
    } 
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
            onClick={this.handleButtonClick}
          >
            Entrar 
          </button>
        </form>
      </div>
    );
  }
}
