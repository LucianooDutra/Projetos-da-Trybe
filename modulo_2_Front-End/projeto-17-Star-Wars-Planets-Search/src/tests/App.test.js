import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('testes gerais' , () => {
  it('verificar se os inputs e botões são renderizados na tela ao inciar', () => {
    render(<App />);

    const inputSearchPlanets = screen.getByRole('textbox');
    const inputColuna = screen.getByRole('combobox', { name: /coluna/i });
    const inputOperador = screen.getByRole('combobox', { name: /operador/i });
    const textOperador = screen.getByText(/operador/i);
    const inputValor = screen.getByRole('spinbutton', { name: /valor/i });
    const textValor = screen.getByText(/valor/i);
    const buttonFiltrar = screen.getByRole('button', { name: /filtrar/i });
    expect(inputSearchPlanets).toBeInTheDocument();
    expect(inputColuna).toBeInTheDocument();
    expect(inputColuna).toHaveProperty('nodeName', 'SELECT');
    expect(inputOperador).toBeInTheDocument();
    expect(textOperador).toBeInTheDocument();
    expect(textOperador).toHaveProperty('nodeName', 'LABEL');
    expect(inputValor).toBeInTheDocument();
    expect(textValor).toBeInTheDocument();
    expect(buttonFiltrar).toBeInTheDocument();
  });

  it('verificar se os titulos da minha tabela são renderizados', () => {
    render(<App />);

    const titleName = screen.getByRole('columnheader', { name: /name/i });
    const titleRotationPer = screen.getByRole('columnheader', { name: /rotation period/i });
    const titleOrbitalPer = screen.getByRole('columnheader', { name: /orbital period/i });
    const titleDiameter = screen.getByRole('columnheader', { name: /diameter/i });
    const titleClimate = screen.getByRole('columnheader', { name: /climate/i });
    const titleGravity = screen.getByRole('columnheader', { name: /gravity/i });
    const titleTerrain = screen.getByRole('columnheader', { name: /terrain/i });
    const titleSurfaceWater = screen.getByRole('columnheader', { name: /surface water/i });
    const titlePopulation = screen.getByRole('columnheader', { name: /population/i });
    const titleFilms = screen.getByRole('columnheader', { name: /films/i });
    const titleCreated = screen.getByRole('columnheader', { name: /created/i });
    const titleEdited = screen.getByRole('columnheader', { name: /edited/i });
    const titleURL = screen.getByRole('columnheader', { name: /url/i });
    expect(titleName).toBeInTheDocument();
    expect(titleRotationPer).toBeInTheDocument();
    expect(titleOrbitalPer).toBeInTheDocument();
    expect(titleDiameter).toBeInTheDocument();
    expect(titleClimate).toBeInTheDocument();
    expect(titleGravity).toBeInTheDocument();
    expect(titleTerrain).toBeInTheDocument();
    expect(titleSurfaceWater).toBeInTheDocument();
    expect(titlePopulation).toBeInTheDocument();
    expect(titleFilms).toBeInTheDocument();
    expect(titleCreated).toBeInTheDocument();
    expect(titleEdited).toBeInTheDocument();
    expect(titleURL).toBeInTheDocument();

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument;
  });

  it('verificar as funcionalidades dos meus elementos de input', async () => {
    render(<App />);

    const inputColuna = screen.getByRole('combobox', { name: /coluna/i });
    userEvent.selectOptions(inputColuna, 'population')
    userEvent.selectOptions(inputColuna, 'orbital_period')
    userEvent.selectOptions(inputColuna, 'diameter')
    userEvent.selectOptions(inputColuna, 'rotation_period')
    userEvent.selectOptions(inputColuna, 'surface_water')

    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const getChildren = Array.from(inputColuna.children).map(option => {
      expect(option).toHaveProperty('nodeName', 'OPTION');
      return option.innerHTML;
    });
    expect(getChildren).toEqual(expect.arrayContaining(options));

    const inputOperador = screen.getByRole('combobox', { name: /operador/i });
    userEvent.selectOptions(inputOperador, 'maior que')
    userEvent.selectOptions(inputOperador, 'menor que')
    userEvent.selectOptions(inputOperador, 'igual a')

    const itensOperador = ['maior que', 'menor que', 'igual a'];
    const getChildren2 = Array.from(inputOperador.children).map(option => {
      expect(option).toHaveProperty('nodeName', 'OPTION');
      return option.innerHTML;
    });
    expect(getChildren2).toEqual(expect.arrayContaining(itensOperador));

    const inputSearchPlanets = await screen.findByRole('textbox');
    fireEvent.click(inputSearchPlanets);
    fireEvent.change(inputSearchPlanets, { target: { value: 'h' } });
    const planets = ['Dagobah', 'Hoth'];
    planets.map(async (planet) =>{
      expect(await screen.findByRole('cell', { name: planet
      })).toBeInTheDocument();
    });

    fireEvent.click(inputSearchPlanets);
    fireEvent.change(inputSearchPlanets, { target: { value: 'e' } });
    const planets2 = ['Tatooine', 'Alderaan', 'Bespin', 'Endor'];
    planets2.map(async (planet) =>{
      expect(await screen.findByRole('cell', { name: planet
      })).toBeInTheDocument();
    });

    fireEvent.click(inputSearchPlanets);
    fireEvent.change(inputSearchPlanets, { target: { value: 'o' } });
    const planets3 = ['Coruscant', 'Dagobah', 'Endor', 'Hoth', 'Kamino', 'Naboo', 'Tatooine'];
    planets3.map(async (planet) =>{
      expect(await screen.findByRole('cell', { name: planet
      })).toBeInTheDocument();
    });

    fireEvent.click(inputSearchPlanets);
    fireEvent.change(inputSearchPlanets, { target: { value: '' } });
    const planets4 = ['Alderaan', 'Bespin', 'Coruscant', 'Dagobah', 'Endor', 'Hoth', 'Kamino', 'Naboo', 'Tatooine', 'Yavin IV'];
    planets4.map(async (planet) =>{
      expect(await screen.findByRole('cell', { name: planet
      })).toBeInTheDocument();
    });
  });

  it('verificar a filtragem utilizando os filtros', async () => {
    render(<App />);
    const inputColuna = await screen.findByRole('combobox', { name: /coluna/i });
    const inputOperador = await screen.findByRole('combobox', { name: /operador/i });
    const inputValor = await screen.findByRole('spinbutton', { name: /valor/i });
    const buttonFiltrar = await screen.findByRole('button', { name: /filtrar/i });

    fireEvent.change((inputColuna), { target: { value: 'orbital_period'}});
    fireEvent.change((inputOperador), { target: { value: 'maior que'}});
    fireEvent.change((inputValor), { target: { value: '1000'}});
    fireEvent.click((buttonFiltrar));
    expect((await screen.findAllByRole('row')).length).toBe(1);

    fireEvent.change((inputColuna), { target: { value: 'rotation_period'}});
    fireEvent.change((inputOperador), { target: { value: 'igual a'}});
    fireEvent.change((inputValor), { target: { value: '27'}});
    fireEvent.click((buttonFiltrar));
    expect((await screen.findAllByRole('row')).length).toBe(1);

    fireEvent.change((inputColuna), { target: { value: 'diameter'}});
    fireEvent.change((inputOperador), { target: { value: 'menor que'}});
    fireEvent.change((inputValor), { target: { value: '5000'}});
    fireEvent.click((buttonFiltrar));
    expect((await screen.findAllByRole('row')).length).toBe(1);

    fireEvent.change((inputColuna), { target: { value: 'population'}});
    fireEvent.change((inputOperador), { target: { value: 'menor que'}});
    fireEvent.change((inputValor), { target: { value: '4000'}});
    fireEvent.click((buttonFiltrar));
    expect((await screen.findAllByRole('row')).length).toBe(1);
  });
});
