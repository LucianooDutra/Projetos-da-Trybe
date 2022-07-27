// test('', () => {});
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const titlePokedex = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(titlePokedex).toBeInTheDocument();
  });

  it('Teste se exibe o botão proximo pokemon', () => {
    renderWithRouter(<App />);
    const buttonProx = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    expect(buttonProx).toBeInTheDocument();
  });

  it('Os próximos pokémons da lista devem ser mostrados, ao clicar no botão', () => {
    renderWithRouter(<App />);
    const buttonProx = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    const imgPokemon = screen.getAllByRole('img');

    userEvent.click(buttonProx);

    expect(imgPokemon).toHaveLength(1);
  });

  it('O primeiro pokémon da lista deve ser mostado, se estiver no último pokémon', () => {
    renderWithRouter(<App />);
    const buttonProx = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    const pokemon = screen.getByTestId('pokemon-name');

    // Vi que a lista de pokemons tem 9 ao todo, sendo assim fiz eventos de cliks até chegar no ultimo
    // depois fiz outro pra mudar pra o primeiro.
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);
    userEvent.click(buttonProx);

    // Ultimo pokemon
    expect(pokemon.textContent).toBe('Dragonair');

    userEvent.click(buttonProx);

    // Primeiro pokemon
    expect(pokemon.textContent).toBe('Pikachu');
  });

  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const imgPokemon = screen.getAllByRole('img');

    expect(imgPokemon.length).toBe(1);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', {
      name: /all/i,
    });
    const buttonElectric = screen.getByRole('button', {
      name: /electric/i,
    });
    const buttonFire = screen.getByRole('button', {
      name: /fire/i,
    });
    const buttonBug = screen.getByRole('button', {
      name: /bug/i,
    });
    const buttonPoison = screen.getByRole('button', {
      name: /poison/i,
    });
    const buttonPsychic = screen.getByRole('button', {
      name: /psychic/i,
    });
    const buttonNormal = screen.getByRole('button', {
      name: /normal/i,
    });
    const buttonDragon = screen.getByRole('button', {
      name: /dragon/i,
    });

    expect(buttonAll).toBeInTheDocument();
    expect(buttonElectric).toBeInTheDocument();
    expect(buttonFire).toBeInTheDocument();
    expect(buttonBug).toBeInTheDocument();
    expect(buttonPoison).toBeInTheDocument();
    expect(buttonPsychic).toBeInTheDocument();
    expect(buttonNormal).toBeInTheDocument();
    expect(buttonDragon).toBeInTheDocument();
  });

  it('A partir de um botão de tipo, a Pokédex deve circular nos pokémons do tipo', () => {
    renderWithRouter(<App />);

    // Visualizar que ao clicar no botão bug, aparecerá o 1° pokemon daquela lista.
    const buttonBug = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(buttonBug);

    const pokemonCaterpie = screen.getByText(/caterpie/i);

    expect(pokemonCaterpie.textContent).toBe('Caterpie');
  });

  it('O texto do botão deve corresponder ao nome do tipo, ex. Psychic', () => {
    renderWithRouter(<App />);
    const pokemonTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic',
      'Normal', 'Dragon'];

    // Pecorrer todo o array
    pokemonTypes.forEach((type) => {
      const button = screen.getByRole('button', {
        name: type,
      });

      // vejo se é renderizado meus componentes com o nome de cada tipo
      expect(button).toBeInTheDocument();
    });

    const allButtons = screen.getAllByTestId('pokemon-type-button');
    allButtons.forEach((button) => expect(button).toBeInTheDocument());
  });

  it('O botão All precisa estar sempre visível', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(buttonAll);
    expect(buttonAll).toBeInTheDocument();

    const buttonElectric = screen.getByRole('button', {
      name: /electric/i,
    });
    userEvent.click(buttonElectric);
    expect(buttonAll).toBeInTheDocument();

    const buttonFire = screen.getByRole('button', {
      name: /fire/i,
    });
    userEvent.click(buttonFire);
    expect(buttonAll).toBeInTheDocument();

    const buttonBug = screen.getByRole('button', {
      name: /bug/i,
    });
    userEvent.click(buttonBug);
    expect(buttonAll).toBeInTheDocument();

    const buttonPoison = screen.getByRole('button', {
      name: /poison/i,
    });
    userEvent.click(buttonPoison);
    expect(buttonAll).toBeInTheDocument();

    const buttonPsychic = screen.getByRole('button', {
      name: /psychic/i,
    });
    userEvent.click(buttonPsychic);
    expect(buttonAll).toBeInTheDocument();

    const buttonNormal = screen.getByRole('button', {
      name: /normal/i,
    });
    userEvent.click(buttonNormal);
    expect(buttonAll).toBeInTheDocument();

    const buttonDragon = screen.getByRole('button', {
      name: /dragon/i,
    });
    userEvent.click(buttonDragon);
    expect(buttonAll).toBeInTheDocument();
  });
});
