import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <span className="missions">
          {missions.map((mission) => (<MissionCard
            key={ mission.name }
            className="mission-card"
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
        </span>
      </div>
    );
  }
}

export default Missions;
