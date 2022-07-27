import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Carregando from '../components/Carregando';
import { getUser } from '../services/userAPI';
import semImagem from '../images/semImagem.png';

class Profile extends React.Component {
  state = {
    carregando: true,
    user: null,
  };

  componentDidMount() {
    getUser().then((result) => {
      this.setState({
        carregando: false,
        user: result,
      });
    });
  }

  perfil = () => {
    const { user: { description, email, image, name } } = this.state;
    return (
      <div>
        <img src={ image || semImagem } alt={ name } data-testid="profile-image" />
        <Link to="/profile/edit">Editar perfil</Link>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <p>{description}</p>
      </div>
    );
  }

  render() {
    const { carregando } = this.state;
    return (
      <div data-testid="page-profile">
        <div>
          <Header />
        </div>
        <div>
          { carregando ? <Carregando /> : this.perfil() }
        </div>
        <p>Profile</p>
      </div>
    );
  }
}

export default Profile;
