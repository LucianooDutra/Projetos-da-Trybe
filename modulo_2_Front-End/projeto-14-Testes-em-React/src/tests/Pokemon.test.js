// test('', () => {});
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('O nome correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByText(/pikachu/i);
    expect(namePokemon).toBeInTheDocument();
  });

  it('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toBeDefined();
    expect(typePokemon).toHaveTextContent('Electric');
  });

  it('Teste peso do pokémon no formato Average weight: <value> <measurementUnit>', () => {
    renderWithRouter(<App />);
    const weightPokemon1 = screen.getAllByTestId('pokemon-weight');
    const weightPokemon2 = screen.getByText(/average weight: 6\.0 kg/i);
    expect(weightPokemon1).toBeDefined();
    expect(weightPokemon2).toBeInTheDocument();
  });

  it('A imagem do pokémon deve ser exibida', () => {
    renderWithRouter(<App />);
    const imgPokemon = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
    const namePokemon = 'Pikachu';

    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon.src).toBe(imgUrl);
    expect(imgPokemon.alt).toBe(`${namePokemon} sprite`);
  });

  it('Teste se no card da Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    // id do pikachu
    const idPokemon = '25';

    expect(linkDetails).toBeInTheDocument();
    expect(linkDetails.href).toBe(`http://localhost/pokemons/${idPokemon}`);
  });

  it('Teste ao clicar no link de navegação, é feito o redirecionamento', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkDetails);

    // id do pikachu
    const idPokemon = '25';

    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe(`/pokemons/${idPokemon}`);
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkDetails);

    const linkFavorites = screen.getByText(/pokémon favoritado\?/i);

    userEvent.click(linkFavorites);

    const namePokemon = 'Pikachu';
    const imgStar = screen.getAllByRole('img')[1];

    expect(imgStar).toBeInTheDocument();
    expect(imgStar.src).toBe('http://localhost/star-icon.svg');
    expect(imgStar.alt).toBe(`${namePokemon} is marked as favorite`);
  });
});
