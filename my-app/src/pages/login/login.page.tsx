import React from 'react';
import { loginMutation } from '../../data/graphql';

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

  private login = async () => {
    await loginMutation(this.state.email, this.state.password).then((result) => {
      localStorage.setItem("token", result.data.login.token);
    })
    .catch((err) => {
      alert(err);
    });
  }
 
  private handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value } as Pick<LoginPageState, keyof LoginPageState>);
  }

  private handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isValidEmail = this.validateEmail(this.state.email)
    const isValidPassword = this.validatePassword(this.state.password)

    if (!isValidEmail && !isValidPassword) {
      alert('Email e senha inválidos!')
    } else if (!isValidEmail) {
      alert('Email inválido')
    } else if (!isValidPassword) {
      alert('Senha inválida')
    } else {
      e.preventDefault();
      await this.login();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Bem-vindo(a) à Taqtile!</h1>
        </div>
        <form className="login" name="login">
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
