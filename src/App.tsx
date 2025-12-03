import { useState } from 'react';
import { Snowflakes } from './components/Snowflakes';
import { TimelineCard } from './components/TimelineCard';
import { Modal } from './components/Modal';
import { activities } from './data/schedule';
import type { Activity, TeamActivity } from './types';
import xmasBg from './assets/xmas2.png';
import headerImg from './assets/header.png';
import './App.css';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<TeamActivity | null>(null);

  return (
    <div className="app" style={{ backgroundImage: `url(${xmasBg})` }}>
      <Snowflakes />
      
      <div className="container">
        <header className="header">
          <img src={headerImg} alt="2025 하반기 숏폼 스튜디오 스쿼드 플레이샵" className="header-image" />
        </header>

        <div className="timeline">
          {activities.map((activity) => (
            <TimelineCard
              key={activity.id}
              activity={activity}
              onClick={(team) => {
                setSelectedActivity(activity);
                setSelectedTeam(team || null);
              }}
            />
          ))}
        </div>
      </div>

      {selectedActivity && (
        <Modal
          activity={selectedActivity}
          selectedTeam={selectedTeam}
          onClose={() => {
            setSelectedActivity(null);
            setSelectedTeam(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
