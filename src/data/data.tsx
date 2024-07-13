import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import memoriesApp from '../images/portfolio/memoriesapp.jpg';
import rasppiCar from '../images/portfolio/rpcar.jpg';
import carDashboardUi from '../images/portfolio/cardashboardui.jpg';
import carServer from '../images/portfolio/carserver.jpg';
import talkingPlant from '../images/portfolio/talkingplant.jpg'
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey, I'm John`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a generalist <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Bell Canada</strong> helping build modern applications to accelerate cloud migration.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me on the <strong className="text-stone-100">pickle ball</strong> field,
        bashing my <strong className="text-stone-100">piano</strong>, or fiddling with my 
        <strong className="text-stone-100">Raspberry Pi</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi! I'm a generalist Software Engineer with a blend of aerospace and tech expertise. 
  My journey in aerospace has taught me precision and efficiency, which I now bring to the software world in every project I tackle. 
  With a Bachelor's in Mechanical Engineering from McGill University and ongoing Master's in Computer Science at Georgia Tech, 
  I bring a multidisciplinary approach to software development.
  
  I love tackling complex challenges using the latest tools to build and deploy full-stack web applications, 
  working with technologies like Vue.js, Django REST Framework, Gitlab-Ci, Kubernetes, and Docker. I am still constantly learning new tools to integrate into my workflow.`,
  aboutItems: [
    {label: 'Location', text: 'New York, USA', Icon: MapIcon},
    {label: 'Nationality', text: 'American / Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Tennis, Motorsports, Stock trading', Icon: SparklesIcon},
    {label: 'Study', text: 'Georgia Tech', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bell Canada', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Vue2/3',
        level: 8,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Django REST Framework',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Rust',
        level: 5,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Gitlab-CI',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'Helm',
        level: 7,
      },
      {
        name: 'Docker',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NightKidz Social Media App',
    description: 'Social media application (built using ReactJs, Node.js, Express & MongoDB) designed for automotive enthusiasts to interact and share their passion.',
    url: 'https://nightkidzmemories.netlify.app/posts',
    image: memoriesApp,
  },
  {
    title: 'Autopilot Pi-Car',
    description: 'Autopilot software for a Raspberry Pi-powered car, integrating object detection and autonomous navigation',
    url: 'https://github.com/baby-pilot/self-driving-car/tree/main/autopilot/Lab_1_B',
    image: rasppiCar,
  },
  {
    title: 'Talking Plant',
    description: 'Raspberry Pi project to give speech abilities to any plant, giving them the ability to ask for water, sunlight and help against predators (my cat).',
    url: 'https://github.com/jpan8866/talking-plant',
    image: talkingPlant,
  },
  {
    title: 'Car dashboard UI',
    description: 'A car dashboard built using Electron which works with a Node backend to visualize metrics and remotely control a Raspberry Pi-powered car.',
    url: 'https://github.com/jpan8866/car-dashboard', // move server into front end dashboard
    image: carDashboardUi,
  },
  {
    title: 'Car dashboard Server',
    description: 'Node backend to serve vehicle metrics and video feed',
    url: 'https://github.com/jpan8866/baby-pilot/tree/master/autopilot/Lab_2',
    image: carServer,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2024 - August 2026 ',
    location: 'Georgia Institute of Technology',
    title: 'Masters of Science in Computer Science',
    content: <p>Concentration in Computing.</p>,
  },
  {
    date: 'January 2024 - May 2024',
    location: 'University of Illinois Urbana Champaign',
    title: 'Masters in Computer Science',
    content: <p>CGPA: 4.0/4.0. Transfered to Georgia Tech.</p>,
  },
  {
    date: 'August 2016 - May 2021',
    location: 'McGill University',
    title: 'Bachelors in Mechanical Engineering, Minor in Computer Science',
    content: <p>CGPA: 4.66/4.00. <i>Courses</i>: Data Structures & Algorithms, Database Systems, Java OOP, 
      Software Systems, Applied Machine Learning, AI, Programming Languages & Paradigms</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2022 - Present',
    location: 'Bell Canada',
    title: 'Software Engineer',
    content: (
      <p>
        ●	Led and developed the full-stack integration of 5 features, achieving significant process improvements, including an 80% reduction in lead time for cloud deployments, saving an average of 450 man-hours. <strong>(Vue2 Typescript, Python Django REST Framework)</strong>
        ●	Implemented numerous UI features and components in a scaled trunk-based development environment, including user-friendly admin pages with dynamic filtering and table functionalities, which accelerated daily administrative tasks such as data management by 90%. <strong>(Vue2, Typescript)</strong>
        ●	Built, and maintained robust CI/CD pipelines for new and existing applications, resulting in an 80% improvement in the deployment speed of new updates and 0% error rate with no rollback incidents since launching the new application into production. <strong>(OpenShift, Kubernetes, Docker, Gitlab-CI, Artifactory, Helm, Vault)</strong>
        ●	Developed comprehensive Grafana dashboards to visualize backend data as well as application health monitoring enabling real-time analytics and insights. <strong>(Grafana, Prometheus)</strong>
      </p>
    ),
  },
  {
    date: 'May 2021 - October 2021',
    location: 'Damotech',
    title: 'Project Engineer',
    content: (
      <p>
        ●	Undertook the development of a machine learning model <strong>(CNN)</strong> to classify rack damage image data to assist inspection duties. <strong>(Scikit-learn)</strong>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'john.pan@mail.mcgill.ca',
      href: 'mailto:john.pan@mail.mcgill.ca',
    },
    {
      type: ContactType.Location,
      text: 'New York, USA',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'John Derek Pan',
      href: 'https://www.linkedin.com/in/johnderekpan/',
    },
    {
      type: ContactType.Github,
      text: 'jpan8866',
      href: 'https://github.com/jpan8866',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jpan8866'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/johnderekpan/'},
];
