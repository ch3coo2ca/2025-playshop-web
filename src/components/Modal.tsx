import { useEffect, useRef } from 'react';
import type { Activity, TeamActivity, MapInfo } from '../types';
import '../styles/Modal.css';

interface ModalProps {
  activity: Activity;
  selectedTeam?: TeamActivity | null;
  onClose: () => void;
}

// daum 객체 타입 정의
declare global {
  interface Window {
    daum?: {
      roughmap?: {
        Lander: new (config: {
          timestamp: string;
          key: string;
          mapWidth: string;
          mapHeight: string;
        }) => {
          render: () => void;
        };
      };
    };
  }
}

export const Modal = ({ activity, selectedTeam, onClose }: ModalProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const multiMapContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  // CSS로 스크롤 제어하므로 useEffect 불필요

  // 단일 지도 렌더링 (기존 activity.mapUrl 사용)
  useEffect(() => {
    if (!selectedTeam?.maps && activity.mapUrl && activity.mapUrl.includes('daumRoughmapContainer')) {
      const container = mapContainerRef.current;
      if (!container) return;

      container.innerHTML = activity.mapUrl;

      let retryCount = 0;
      const maxRetries = 20;

      const renderMap = () => {
        retryCount++;
        
        if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
          try {
            const mapUrl = activity.mapUrl || '';
            const isLaseine = mapUrl.includes('daumRoughmapContainer1764057887312');
            const isKuza = mapUrl.includes('daumRoughmapContainer1764059872566');
            
            if (isLaseine) {
              new window.daum.roughmap.Lander({
                timestamp: '1764057887312',
                key: 'd6tw3xs3cdv',
                mapWidth: '640',
                mapHeight: '360'
              }).render();
            } else if (isKuza) {
              new window.daum.roughmap.Lander({
                timestamp: '1764059872566',
                key: 'd72oewm47gv',
                mapWidth: '640',
                mapHeight: '360'
              }).render();
            }
          } catch (error) {
            console.error('카카오맵 렌더링 에러:', error);
          }
        } else if (retryCount < maxRetries) {
          setTimeout(renderMap, 100);
        }
      };

      setTimeout(renderMap, 100);
    }
  }, [activity.mapUrl, selectedTeam?.maps]);

  // 여러 지도 렌더링 (selectedTeam.maps 사용)
  useEffect(() => {
    if (selectedTeam?.maps && selectedTeam.maps.length > 0) {
      selectedTeam.maps.forEach((mapInfo: MapInfo, index: number) => {
        const container = multiMapContainersRef.current[index];
        if (!container) return;

        container.innerHTML = mapInfo.mapUrl;

        let retryCount = 0;
        const maxRetries = 20;

        const renderMap = () => {
          retryCount++;
          
          if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
            try {
              new window.daum.roughmap.Lander({
                timestamp: mapInfo.timestamp,
                key: mapInfo.key,
                mapWidth: '640',
                mapHeight: '360'
              }).render();
            } catch (error) {
              console.error(`지도 ${index} 렌더링 에러:`, error);
            }
          } else if (retryCount < maxRetries) {
            setTimeout(renderMap, 100);
          }
        };

        setTimeout(renderMap, 100 * (index + 1)); // 각 지도마다 약간의 딜레이
      });
    }
  }, [selectedTeam?.maps]);

  // 단일 일반 지도 렌더링 (파티룸 등)
  useEffect(() => {
    if (!selectedTeam?.maps && activity.mapUrl && activity.mapUrl.includes('daumRoughmapContainer1764062793311')) {
      const container = mapContainerRef.current;
      if (!container) return;

      container.innerHTML = activity.mapUrl;

      let retryCount = 0;
      const maxRetries = 20;

      const renderMap = () => {
        retryCount++;
        
        if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
          try {
            new window.daum.roughmap.Lander({
              timestamp: '1764062793311',
              key: 'csdrp5vg6om',
              mapWidth: '640',
              mapHeight: '360'
            }).render();
          } catch (error) {
            console.error('카카오맵 렌더링 에러:', error);
          }
        } else if (retryCount < maxRetries) {
          setTimeout(renderMap, 100);
        }
      };

      setTimeout(renderMap, 100);
    }
  }, [activity.mapUrl, selectedTeam?.maps]);

  // 롯데호텔월드 지도 렌더링
  useEffect(() => {
    if (!selectedTeam?.maps && activity.mapUrl && activity.mapUrl.includes('daumRoughmapContainer1764742070835')) {
      const container = mapContainerRef.current;
      if (!container) return;

      container.innerHTML = activity.mapUrl;

      let retryCount = 0;
      const maxRetries = 20;

      const renderMap = () => {
        retryCount++;
        
        if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
          try {
            new window.daum.roughmap.Lander({
              timestamp: '1764742070835',
              key: 'd93hg9to7rw',
              mapWidth: '640',
              mapHeight: '360'
            }).render();
          } catch (error) {
            console.error('카카오맵 렌더링 에러:', error);
          }
        } else if (retryCount < maxRetries) {
          setTimeout(renderMap, 100);
        }
      };

      setTimeout(renderMap, 100);
    }
  }, [activity.mapUrl, selectedTeam?.maps]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isKakaoMap = activity.mapUrl && activity.mapUrl.includes('daumRoughmapContainer');
  const hasMultipleMaps = selectedTeam?.maps && selectedTeam.maps.length > 0;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <div className="modal-header-info">
            <h2 className="modal-title">{activity.title}</h2>
            <div className="modal-meta">
              <span className="modal-time">{activity.time}</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          {(selectedTeam?.subtitle || activity.subtitle) && (
            <div className="modal-subtitle">{selectedTeam?.subtitle || activity.subtitle}</div>
          )}

          {/* detailedInfo가 없고 maps가 있으면 description 표시 안 함 */}
          {!hasMultipleMaps && (
            <div className="modal-description">
              {selectedTeam?.detailedInfo || activity.description}
            </div>
          )}

          {/* 여러 지도 렌더링 (selectedTeam.maps) */}
          {hasMultipleMaps && (
            <div className="modal-maps-container">
              {selectedTeam.maps!.map((mapInfo: MapInfo, index: number) => (
                <div key={index} className="modal-map-item">
                  <div className="map-top-section">
                    <div className="map-number">{index + 1}</div>
                    <div className="map-info">
                      <h3 className="map-title">{mapInfo.title}</h3>
                      {mapInfo.time && (
                        <span className="map-time">{mapInfo.time}</span>
                      )}
                    </div>
                  </div>
                  {mapInfo.address && (
                    <div className="map-address-section">
                      📍 {mapInfo.address}
                    </div>
                  )}
                  {mapInfo.members && (
                    <div className="map-members-section">
                      👥 {mapInfo.members}
                    </div>
                  )}
                  <div className="modal-map">
                    <div 
                      ref={(el) => { multiMapContainersRef.current[index] = el; }}
                      className="kakao-map-container"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 단일 지도 렌더링 (기존 activity.mapUrl) */}
          {!hasMultipleMaps && activity.mapUrl && (
            <div className="modal-location-section">
              {activity.location && (
                <div className="location-info">
                  📍 {activity.location}
                </div>
              )}
              <div className="modal-map">
                {isKakaoMap ? (
                  <div ref={mapContainerRef} className="kakao-map-container"></div>
                ) : (
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
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

