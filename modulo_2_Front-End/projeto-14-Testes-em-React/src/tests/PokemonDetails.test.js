// test('', () => {});
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

// Inicio
describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do pokémon são mostradas na tela', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkDetails);

    const namePokemon = 'Pikachu';
    const namePokemonDetails = screen.getByRole('heading', {
      name: `${namePokemon} Details`,
      level: 2,
    });
    const nameSummary = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });
    const paragraph = screen.getByText(/this intelligent pokémon roasts hard berries/i);

    expect(namePokemonDetails).toBeInTheDocument();
    expect(linkDetails).not.toBeInTheDocument();
    expect(nameSummary).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações', () => {
    renderWithRouter(<App />);

    // entrar na pag
    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkDetails);

    // testar titulo localização
    const namePokemon = 'Pikachu';
    const namePokemonDetails = screen.getByRole('heading', {
      name: `Game Locations of ${namePokemon}`,
      level: 2,
    });
    expect(namePokemonDetails).toBeInTheDocument();

    // testar localizações
    const locations = ['Kanto Viridian Forest', 'Kanto Power Plant'];
    locations.forEach((loc) => {
      const location = screen.getByText(loc);

      expect(location).toBeInTheDocument();
    });

    // testar src
    const img = screen.getAllByAltText('Pikachu location');

    expect(img[0].src).toBe('https://pwo-wiki.info/images/4/47/Viridian_Forest.gif');
    expect(img[1].src).toBe('https://pwo-wiki.info/images/5/5b/Pp.gif');

    // testar alt
    const name = 'Pikachu';
    expect(img[0].alt).toBe(`${name} location`);
    expect(img[1].alt).toBe(`${name} location`);
  });

  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    // entrar na pag
    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkDetails);

    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);

    const label = screen.getByText(/pokémon favoritado\?/i);
    expect(label).toHaveTextContent('Pokémon favoritado?');
  });
});
