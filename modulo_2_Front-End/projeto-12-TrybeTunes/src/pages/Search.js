import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Carregando from '../components/Carregando';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    disabled: true,
    nomeArtista: '',
    carregando: false,
    nomeAlbum: null,
  };

  // Função que fiz a contagem de letras escritas pra liberar meu button
  // peguei o valor e joguei pra o nome do meu artista
  countName = ({ target: { value } }) => {
    const sizeMin = 2;

    const nomeArtista = value;

    this.setState({ nomeArtista });

    if (value.length >= sizeMin) {
      this.setState({ disabled: false });
      this.name = nomeArtista;
    }
  }

  // Função pra pegar o album pesquisado dentro da minha API
  // Enquanto busca aparece a mensagem carregando, e quando acha ela sai e aparece os resultados e apaga o valor do meu artista na pesquisa.
  buscarAlbum = () => {
    const { nomeArtista } = this.state;

    this.setState({ carregando: true });

    searchAlbumsAPI(nomeArtista).then((result) => {
      this.setState({
        carregando: false,
        nomeAlbum: result,
        nomeArtista: '',
      });
    });
  }

  // Função que vai me retornar como quero que meu album apareça
  album = () => {
    const { nomeAlbum } = this.state;
    return (
      <div>
        {
          nomeAlbum
            .map(({ collectionId, artistName, collectionName, artworkUrl100 }) => (
              <Link
                key={ collectionId }
                data-testid={ `link-to-album-${collectionId}` }
                to={ `/album/${collectionId}` }
              >
                <div>
                  <img src={ artworkUrl100 } alt={ collectionName } />
                  <h4>{artistName}</h4>
                  <h5>{collectionName}</h5>
                </div>
              </Link>
            ))
        }
      </div>
    );
  }

  // Função que compara caso não seja encontrado nenhum nome de artista ou encontrado.
  // Se encontrado chama minha função do album, se não aparece o aviso de nenhum album encontrado.
  confirmarAlbum = () => {
    const { name, state: { nomeAlbum } } = this;
    if (nomeAlbum) {
      return (
        <>
          <h2>{`Resultado de álbuns de: ${name}`}</h2>
          { nomeAlbum.length > 0
            ? this.album()
            : <h2>Nenhum álbum foi encontrado</h2> }
        </>
      );
    }
  }

  artista = () => {
    const { disabled, nomeArtista } = this.state;
    return (
      <div>
        <label htmlFor="BuscarNomeArtista">
          <input
          // Defini meu value como meu nomeArtista porque assim que clicar pra pesquisar ele irá apagar.
            value={ nomeArtista }
            data-testid="search-artist-input"
            type="text"
            placeholder="Nome do artista"
            id="BuscarNomeArtista"
            className="BuscarNomeArtista"
            onChange={ this.countName }
          />
        </label>
        <button
          type="submit"
          className="BotaoProcurarArtista"
          data-testid="search-artist-button"
          disabled={ disabled }
          onClick={ this.buscarAlbum }
        >
          Pesquisar
        </button>
      </div>
    );
  }

  render() {
    const { carregando } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        { this.artista() }
        { carregando ? <Carregando /> : this.confirmarAlbum() }
        <p>Search</p>
      </div>
    );
  }
}

export default Search;
