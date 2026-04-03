import robinaImg from './WTM Events Pictures/Robina Picture/Robina Mirbahar.jpg';
import hasnainImg from './WTM Events Pictures/IWD 26 Team/Hasnain KK.jpeg';
import tunjinaImg from './WTM Events Pictures/IWD 26 Team/Tunhina.jpeg';
import hurainImg from './WTM Events Pictures/IWD 26 Team/Hurain.jpeg';
import iwd26Img from './WTM Events Pictures/IWD26/Event lookup.jpg';
import impactFutureImg from './WTM Events Pictures/RAH00576.jpg';
import accelerateActionImg from './WTM Events Pictures/478403869_596286476700737_8847670728925164592_n.jpg';

export const sharedTeamData = [
  {
    id: 1,
    slug: 'robina-mirbahar',
    name: 'Robina Mirbahar',
    role: 'Ambassador',
    gender: 'female',
    bio: 'Robina serves as a crucial bridge between local talent and global technical ecosystems. Her drive to empower marginalized professionals natively within Sindh has scaled the WTM operations profoundly. She actively curates safe spaces for learning and leads mentorship pipelines directly prioritizing young girls.',
    photoUrl: robinaImg,
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/robina-mirbahar-7538a7151/' },
      { platform: 'Twitter', url: '#' }
    ]
  },
  {
    id: 2,
    slug: 'hasnain-kk',
    name: 'Hasnain KK',
    role: 'Organizer',
    gender: 'male',
    bio: 'Hasnain is a technical architect overseeing the expansion of Women Techmakers Hyderabad. His focus is on establishing robust technical pipelines and promoting inclusive leadership across Sindh. He is deeply committed to empowering juniors and mapping community growth with real-world developer tools.',
    photoUrl: hasnainImg,
    socials: [
      { platform: 'LinkedIn', url: '#' },
      { platform: 'GitHub', url: '#' }
    ]
  },
  {
    id: 3,
    slug: 'tunjina',
    name: 'Tunjina',
    role: 'Organizer',
    gender: 'female',
    bio: 'Tunjina serves as a lead organizer for Women Techmakers Hyderabad, focusing on community outreach and educational curriculum design. She is passionate about closing the gender gap in technology through accessible mentorship and technical skill-sharing.',
    photoUrl: tunjinaImg,
    socials: [
      { platform: 'LinkedIn', url: '#' }
    ]
  },
  {
    id: 4,
    slug: 'hurain',
    name: 'Hurain',
    role: 'Organizer',
    gender: 'female',
    bio: 'Hurain is a core organizer at WTM Hyderabad, facilitating large-scale technical gatherings and local meetups. She works on optimizing the attendee experience and ensuring every event fosters a culture of inclusivity and professional growth.',
    photoUrl: hurainImg,
    socials: [
      { platform: 'LinkedIn', url: '#' }
    ]
  }
];

export const sharedEventData = [
  {
    slug: 'IWD26Event',
    id: 1,
    title: 'Break The Pattern: IWD 2026 Baithak',
    date: '13 April 2026',
    status: 'Upcoming',
    description: 'Step into the ecosystem. Our annual flagship gathering focused on technical leadership, career scaling, and inclusive mentorship for women of all professions.',
    registration_link: '#/iwd26',
    coverImage: iwd26Img
  },
  {
    slug: 'impact-future-2024',
    id: 2,
    title: 'Impact the Future 2024',
    date: 'April 2024',
    status: 'Past',
    description: 'Our monumental conference bringing together hundreds of developers and leaders across Sindh. Focused on cloud infrastructure and community building.',
    registration_link: null,
    coverImage: impactFutureImg
  },
  {
    slug: 'accelerate-action-2025',
    id: 3,
    title: 'Accelerate Action 2025',
    date: 'March 2025',
    status: 'Past',
    description: 'An aggressive tech leap highlighting actionable skills in AI, data analytics, and full-stack development, hosted entirely by female leaders.',
    registration_link: null,
    coverImage: accelerateActionImg
  }
];
