export interface MapInfo {
  title: string;
  address?: string;
  time?: string;
  note?: string;
  mapUrl: string;
  timestamp: string;
  key: string;
}

export interface TeamActivity {
  label: string;
  activity: string;
  description: string;
  detailedInfo?: string;
  subtitle?: string;
  maps?: MapInfo[];
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  location?: string;
  mapUrl?: string;
  icon: string;
  teamActivities?: TeamActivity[];
}

