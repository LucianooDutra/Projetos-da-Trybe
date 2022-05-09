import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="divMissoes">
        <Title headline="Missões" />
        <div className="missoes">
          {missions.map((missao) => (
            <MissionCard
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
              key={ missao.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
