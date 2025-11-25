import type { Activity } from '../types';
import '../styles/TimelineCard.css';

interface TimelineCardProps {
  activity: Activity;
  onClick: () => void;
}

export const TimelineCard = ({ activity, onClick }: TimelineCardProps) => {
  const hasDetails = Boolean(activity.location || activity.mapUrl);
  
  // 팀별 액티비티인 경우 2열로 표시
  if (activity.teamActivities) {
    return (
      <div className="timeline-item">
        <div className="team-activities-container">
          {activity.teamActivities.map((team, index) => (
            <div 
              key={index}
              className={`timeline-card team-card ${hasDetails ? 'clickable' : ''}`}
              onClick={hasDetails ? onClick : undefined}
              role={hasDetails ? "button" : undefined}
              tabIndex={hasDetails ? 0 : undefined}
              onKeyDown={hasDetails ? (e) => e.key === 'Enter' && onClick() : undefined}
            >
              <div className="team-card-header">
                <div className="card-time">{activity.time}</div>
                <div className="team-label">{team.label}</div>
              </div>
              <div className="team-card-body">
                <h3 className="card-title">{team.activity}</h3>
                <p className="card-description">{team.description}</p>
              </div>
              
              {hasDetails && (
                <div className="card-footer">
                  <span className="view-details">자세히 보기 →</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="timeline-item">
      <div 
        className={`timeline-card ${hasDetails ? 'clickable' : ''}`}
        onClick={hasDetails ? onClick : undefined}
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        onKeyDown={hasDetails ? (e) => e.key === 'Enter' && onClick() : undefined}
      >
        <div className="card-inner">
          <div className="card-time">{activity.time}</div>
          
          <div className="card-content">
            <h3 className="card-title">{activity.title}</h3>
            {activity.subtitle && (
              <p className="card-subtitle">{activity.subtitle}</p>
            )}
            <p className="card-description">{activity.description}</p>
          </div>
        </div>
        
        {hasDetails && (
          <div className="card-footer">
            <span className="view-details">자세히 보기 →</span>
          </div>
        )}
      </div>
    </div>
  );
};