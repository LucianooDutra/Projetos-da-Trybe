import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userEmail } from '../actions/userAction';
import '../css/login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  checkLogin = () => {
    const { email, password } = this.state;
    const testEmail = /\S+@\S+\.\S+/;
    const numberMin = 6;
    const result = !((testEmail.test(email) && password.length >= numberMin));

    return result;
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { history, emailSave } = this.props;
    console.log(email);

    emailSave(email);
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="formLogin" onSubmit={ this.handleSubmit }>
        <div className="divLogin">
          <h1>Minha carteira</h1>
          <div className="divInputs">
            <label htmlFor="nameEmail">
              Email
              <input
                type="email"
                id="nameEmail"
                data-testid="email-input"
                placeholder="alguem@alguem.com"
                name="email"
                onChange={ this.handleChange }
                value={ email }
              />
              {/* <i className="fa fa-envelope-o" aria-hidden="true" /> */}
            </label>
          </div>
          <div className="divInputs">
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                data-testid="password-input"
                placeholder="digite sua senha"
                name="password"
                onChange={ this.handleChange }
                value={ password }
              />
            </label>
          </div>
          <button disabled={ this.checkLogin() } type="submit">Entrar</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSave: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  emailSave: PropTypes.func.isRequired,
};
