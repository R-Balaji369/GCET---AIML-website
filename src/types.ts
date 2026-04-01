export interface Faculty {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  researchInterests: string[];
  email: string;
  photo: string;
  googleScholar?: string;
  linkedIn?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Research' | 'Startup' | 'Project';
  description: string;
  date: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'Seminar' | 'Workshop' | 'Guest Lecture' | 'Hackathon';
  date: string;
  description: string;
  image?: string;
}

export interface Lab {
  id: string;
  name: string;
  description: string;
  facilities: string[];
  image: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'Academic' | 'Notice' | 'Event' | 'Placement';
}
