import type { Activity } from '../types';
import '../styles/TimelineCard.css';

interface TimelineCardProps {
  activity: Activity;
  onClick: () => void;
}

export const TimelineCard = ({ activity, onClick }: TimelineCardProps) => {
  return (
    <div className="timeline-item">
      <div 
        className="timeline-card" 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
      >
        <div className="card-time">{activity.time}</div>
        
        <div className="card-content">
          <h3 className="card-title">{activity.title}</h3>
          {activity.subtitle && (
            <p className="card-subtitle">{activity.subtitle}</p>
          )}
          <p className="card-description">{activity.description}</p>
          
          {(activity.location || activity.mapUrl) && (
            <div className="card-footer">
              <span className="view-details">자세히 보기 →</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};