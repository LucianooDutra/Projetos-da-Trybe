// test('', () => {});
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  it('Teste se é redirecionado para a página inicial, ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });

    userEvent.click(linkHome);

    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe('/');
  });

  it('Teste se é redirecionado para a página About, ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });

    userEvent.click(linkAbout);

    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe('/about');
  });

  it('Se é redirecionado p/ Pokémons Favoritados, ao clicar no Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });

    userEvent.click(linkFavorite);

    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe('/favorites');
  });

  it('Teste a pag Not Found ao entrar em uma URL desconhecida', async () => {
    const { history } = renderWithRouter(<App />);

    // utilizado a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação.
    //  .push, nos envia diretamente pra uma rota, uma pagina, que eu quero fazer os testes.
    history.push('/ronaldoBrilhaMuito');

    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe('/ronaldoBrilhaMuito');

    const notFoundTitle = await screen.findByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
