import { useState } from 'react';
import { Snowflakes } from './components/Snowflakes';
import { TimelineCard } from './components/TimelineCard';
import { Modal } from './components/Modal';
import { activities } from './data/schedule';
import type { Activity } from './types';
import xmasBg from './assets/xmas.jpg';
import './App.css';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="app" style={{ backgroundImage: `url(${xmasBg})` }}>
      <Snowflakes />
      
      <div className="container">
        <header className="header">
          <div className="christmas-ornament left">🎄</div>
          <h1 className="title">
            <span className="title-main">2025 하반기</span>
            <span className="title-sub">숏폼 스튜디오 스쿼드 플레이샵</span>
          </h1>
          <div className="christmas-ornament right">🎅</div>
        </header>

        <div className="timeline">
          {activities.map((activity) => (
            <TimelineCard
              key={activity.id}
              activity={activity}
              onClick={() => setSelectedActivity(activity)}
            />
          ))}
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>🎁 Merry Christmas & Happy Playshop! 🎁</p>
            <p className="footer-year">© 2024</p>
          </div>
        </footer>
      </div>

      {selectedActivity && (
        <Modal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
}

export default App;
