import { useEffect } from 'react';
import type { Activity } from '../types';
import '../styles/Modal.css';

interface ModalProps {
  activity: Activity;
  onClose: () => void;
}

export const Modal = ({ activity, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <span className="modal-icon">{activity.icon}</span>
          <div>
            <h2 className="modal-title">{activity.title}</h2>
            <p className="modal-time">{activity.time}</p>
          </div>
        </div>

        {activity.subtitle && (
          <div className="modal-subtitle">{activity.subtitle}</div>
        )}

        <div className="modal-description">{activity.description}</div>

        {activity.location && (
          <div className="modal-location">
            <span className="location-icon">📍</span>
            {activity.location}
          </div>
        )}

        {activity.mapUrl && (
          <div className="modal-map">
            <iframe
              src={activity.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activity.title} 지도`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

