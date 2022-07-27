// test('', () => {});
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  beforeEach(() => renderWithRouter(<NotFound />));

  it('Teste se a pag contém um heading h2 com o texto Page requested not found 😭', () => {
    const notFoundTitle = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem', () => {
    const imgPokemon = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    // console.log(imgPokemon.src);

    const imgPokemonSrc = imgPokemon.src;
    const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemonSrc).toBe(src);
  });
});
