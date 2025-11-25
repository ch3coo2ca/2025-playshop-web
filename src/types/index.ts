export interface TeamActivity {
  label: string;
  activity: string;
  description: string;
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

