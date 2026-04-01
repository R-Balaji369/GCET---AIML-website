import { Faculty, Achievement, Event, Lab, Announcement } from './types';

export const facultyData: Faculty[] = [
  {
    id: '1',
    name: 'Dr. S. Ravi Kumar',
    designation: 'Professor & Head',
    qualification: 'Ph.D. in AI',
    researchInterests: ['Deep Learning', 'Computer Vision'],
    email: 'hod.aiml@gcet.edu.in',
    photo: 'https://picsum.photos/seed/faculty1/400/400',
    linkedIn: '#',
    googleScholar: '#'
  },
  {
    id: '2',
    name: 'Dr. M. Lakshmi',
    designation: 'Associate Professor',
    qualification: 'Ph.D. in Machine Learning',
    researchInterests: ['NLP', 'Data Science'],
    email: 'lakshmi.m@gcet.edu.in',
    photo: 'https://picsum.photos/seed/faculty2/400/400',
    linkedIn: '#',
    googleScholar: '#'
  },
  // Add more mock faculty
];

export const labData: Lab[] = [
  {
    id: 'ai-lab',
    name: 'Artificial Intelligence Laboratory',
    description: 'Equipped with high-performance workstations and GPU clusters for advanced AI research.',
    facilities: ['NVIDIA RTX 3090 Workstations', 'Cloud Computing Access', 'Robotics Kits'],
    image: 'https://picsum.photos/seed/lab1/800/600'
  },
  {
    id: 'ml-lab',
    name: 'Machine Learning Laboratory',
    description: 'Dedicated space for data mining, predictive modeling, and statistical analysis.',
    facilities: ['Data Science Software Suite', 'High-speed Networking', 'Collaborative Workspaces'],
    image: 'https://picsum.photos/seed/lab2/800/600'
  }
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'B.Tech AI&ML Semester Results Declared',
    date: '2024-03-10',
    content: 'The results for the odd semester have been published on the college portal.',
    category: 'Academic'
  },
  {
    id: '2',
    title: 'Workshop on Generative AI',
    date: '2024-03-15',
    content: 'A two-day hands-on workshop on LLMs and Diffusion models.',
    category: 'Event'
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Smart India Hackathon 2023 Winners',
    category: 'Hackathon',
    description: 'Our students won the first prize in the Healthcare track.',
    date: '2023-12-20',
    image: 'https://picsum.photos/seed/ach1/800/600'
  }
];
