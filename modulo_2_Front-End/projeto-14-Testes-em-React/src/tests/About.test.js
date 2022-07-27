// test('', () => {});
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('Teste o componente <About.js />', () => {
  beforeEach(() => renderWithRouter(<About />));

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const aboutTitle = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });

    expect(aboutTitle).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const textsAbout1 = screen.getByText(/this application simulates a pokédex, a/i);
    const textsAbout2 = screen.getByText(/one can filter pokémons by type, and see/i);

    expect(textsAbout1).toBeInTheDocument();
    expect(textsAbout2).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const imgPokemon = screen.getByRole('img', {
      name: /pokédex/i,
    });
    // console.log(imgPokemon.src);

    const imgPokemonSrc = imgPokemon.src;
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemonSrc).toBe(src);
  });
});
