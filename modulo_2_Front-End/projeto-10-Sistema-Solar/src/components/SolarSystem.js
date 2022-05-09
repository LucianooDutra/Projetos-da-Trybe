import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        <ul className="ulPlanetas">
          {planets.map((planeta) => (
            <PlanetCard
              planetName={ planeta.name }
              planetImage={ planeta.image }
              key={ planeta.name }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
