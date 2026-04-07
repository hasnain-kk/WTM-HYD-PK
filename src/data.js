import robinaImg from './WTM Events Pictures/Robina Picture/Robina Mirbahar.jpg';
import robinaNewImg from './WTM Events Pictures/IWD 26 Team/Robina Mirbahar.jpeg';
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
    seoTitle: 'Robina Mirbahar | WTM Ambassador & Tech Leader Sindh',
    seoKeywords: 'Robina Mirbahar, WTM Hyderabad Ambassador, Women in Tech Pakistan, Tech Leadership Sindh, Female Tech Founders Hyderabad',
    bio: 'Robina serves as a crucial bridge between local talent and global technical ecosystems. Her drive to empower marginalized professionals natively within Sindh has scaled the WTM operations profoundly. She actively curates safe spaces for learning and leads mentorship pipelines directly prioritizing young girls.',
    photoUrl: robinaNewImg,
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/robinamirbahar/' }
    ],
    sameAs: ['https://www.linkedin.com/in/robinamirbahar/']
  },
  {
    id: 2,
    slug: 'hasnain-kk',
    name: 'Hasnain KK',
    role: 'Organizer',
    gender: 'male',
    seoTitle: 'Hasnain KK | WTM Organizer & Web Developer Hyderabad',
    seoKeywords: 'Hasnain KK, WTM Hyderabad Organizer, Web Developer Hyderabad, Tech Lead Pakistan, Community Builder Sindh',
    bio: 'Hasnain is a technical architect overseeing the expansion of Women Techmakers Hyderabad. His focus is on establishing robust technical pipelines and promoting inclusive leadership across Sindh. He is deeply committed to empowering juniors and mapping community growth with real-world developer tools.',
    photoUrl: hasnainImg,
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/hasnainkk/' },
      { platform: 'Website', url: 'https://hasnainkk.bio.link' }
    ],
    sameAs: ['https://www.linkedin.com/in/hasnainkk/', 'https://hasnainkk.bio.link']
  },
  {
    id: 3,
    slug: 'tunjina',
    name: 'Tunjina Ali',
    role: 'Organizer',
    gender: 'female',
    seoTitle: 'Tunjina Ali | Community Outreach Lead WTM Hyderabad',
    seoKeywords: 'Tunjina Ali, WTM Hyderabad Organizer, Community Outreach Sindh, Women Techmakers Pakistan, Tech Education Hyderabad',
    bio: 'Tunjina Ali serves as a lead organizer for Women Techmakers Hyderabad, focusing on community outreach and educational curriculum design. She is passionate about closing the gender gap in technology through accessible mentorship and technical skill-sharing.',
    photoUrl: tunjinaImg,
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/tunjinaali07/' }
    ],
    sameAs: ['https://www.linkedin.com/in/tunjinaali07/']
  },
  {
    id: 4,
    slug: 'hurain',
    name: 'Hurrain Soomro',
    role: 'Organizer',
    gender: 'female',
    seoTitle: 'Hurrain Soomro | Core Organizer & Event Strategist WTM',
    seoKeywords: 'Hurrain Soomro, Hurain Soomro, WTM Hyderabad Organizer, Event Management Sindh, Diversity in Tech Pakistan',
    bio: 'Hurrain Soomro is a core organizer at WTM Hyderabad, facilitating large-scale technical gatherings and local meetups. She works on optimizing the attendee experience and ensuring every event fosters a culture of inclusivity and professional growth.',
    photoUrl: hurainImg,
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/hurrainsoomro/' }
    ],
    sameAs: ['https://www.linkedin.com/in/hurrainsoomro/']
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
