import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import carDashboardUi from '../images/portfolio/cardashboardui.jpg';
import carServer from '../images/portfolio/carserver1.jpg';
import memoriesApp from '../images/portfolio/memoriesapp.jpg';
import rasppiCar from '../images/portfolio/rpcar1.jpg';
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
  title: "John's hideout",
  description: "My personal website =)",
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
        I'm a generalist <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently a SWE intern at Shopify.
        Previously, I've helped build <strong className="text-stone-100">PearAI</strong>, the best AI-powered code editor (P.S. It's open-source!!).
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me on the <strong className="text-stone-100">tennis</strong> court,
        bashing my <strong className="text-stone-100">piano</strong>, or fiddling with my  
        <strong className="text-stone-100"> Raspberry Pi</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/my-hideout/assets/resume.pdf',  // include repository name for github page deployment
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
  description: `Hi! I'm an Engineer with a blend of aerospace and tech expertise. 
  My journey in aerospace has taught me precision and efficiency, which I now bring to the software world in every project I tackle. 
  With a Bachelor's in Mechanical Engineering from McGill University and ongoing Master's in Computer Science at Georgia Tech, 
  I bring a multidisciplinary approach to software development.
  I love tackling complex challenges using the latest tools to build and deploy full-stack web applications, 
  working with technologies like Vue.js, Django REST Framework, Gitlab-Ci, Kubernetes, and Docker. I am still constantly learning new tools to integrate into my workflow.`,
  aboutItems: [
    {label: 'Location', text: 'San Francisco, USA', Icon: MapIcon},
    {label: 'Nationality', text: 'American / Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Tennis, Motorsports, Stock trading', Icon: SparklesIcon},
    {label: 'Study', text: 'Georgia Tech', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'PearAI', Icon: BuildingOffice2Icon},
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
        level: 9,
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
        level: 9,
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
      {
        name: 'OpenShift',
        level: 7
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
    url: 'https://github.com/jpan8866/baby-pilot/tree/master/autopilot/Lab_1_B',
    image: rasppiCar,
  },
  {
    title: 'Talking Plant',
    description: 'Project to bestow plants the power of speech, giving them the ability to ask for water, sunlight and help against predators (my cat).',
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
    content: <p>Concentration in Computing/Machine Learning.</p>,
  },
  {
    date: 'January 2024 - May 2024',
    location: 'University of Illinois Urbana-Champaign',
    title: 'Masters in Computer Science',
    content: <p>CGPA: 4.0/4.0. Transferred to Georgia Tech.</p>,
  },
  {
    date: 'August 2016 - May 2021',
    location: 'McGill University',
    title: 'Bachelors in Mechanical Engineering, Minor in Computer Science',
    content: <p>CGPA: 3.66/4.00. <i>Courses</i>: Data Structures & Algorithms, Database Systems, Java OOP, 
      Software Systems, Applied Machine Learning, AI, Programming Languages & Paradigms</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2024 - Present',
    location: 'PearAI',
    title: 'Software Engineer',
    content: (
        <ul className="list-disc pl-5">
          <li className="mb-1">Development of an AI-powered code editor based on VSCode, including the integration of AI search using Perplexity API <strong>(Typescript, VSCode API)</strong>.</li>
        	<li className="mb-1">Implemented backend server logic using <strong>FastAPI</strong>, including user credit management and subscription tracking.</li>
          <li className="mb-1">Integrated <strong>mem0</strong> as memory layer with asynchronous memory extraction and injection, for intelligent context retention in LLM interactions, offering users a personalized experience (<strong>FastAPI</strong>).</li>
          <li className="mb-1">Designed and implemented responsive onboarding UI using <strong>React</strong> and <strong>Tailwind</strong> and injected into VSCode webview, enhancing user onboarding experience.</li>
          <li className="mb-1">Optimized app performance through custom <strong>Redux</strong> state management, allowing independent history tracking between different integrations.</li>
        </ul>
    ),
  },
  {
    date: 'February 2022 - February 2024',
    location: 'Bell Canada',
    title: 'Software Engineer',
    content: (
        <ul className="list-disc pl-5">
          <li className="mb-1">Led and developed the full-stack integration of 5 features, achieving significant process improvements, including an 80% reduction in lead time for cloud deployments, saving an average of 450 man-hours. <strong>(Vue2 Typescript, Python Django REST Framework)</strong></li>
        	<li className="mb-1">Implemented numerous UI features and components in a scaled trunk-based development environment, including user-friendly admin pages with dynamic filtering and table functionalities, which accelerated daily administrative tasks such as data management by 90%. <strong>(Vue2, Typescript)</strong></li>
          <li className="mb-1">Built, and maintained robust CI/CD pipelines for new and existing applications, resulting in an 80% improvement in the deployment speed of new updates and 0% error rate with no rollback incidents since launching the new application into production. <strong>(OpenShift, Kubernetes, Docker, Gitlab-CI, Artifactory, Helm, Vault)</strong></li>
          <li className="mb-1">Developed comprehensive Grafana dashboards to visualize backend data as well as application health monitoring enabling real-time analytics and insights. <strong>(Grafana, Prometheus)</strong></li>  
        </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // add testimonial in below format to add testimonial section
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Eager to connect with you!',
  items: [
    {
      type: ContactType.Email,
      text: 'john.pan@mail.mcgill.ca',
    },
    {
      type: ContactType.Location,
      text: 'New York, USA',
      href: 'https://maps.app.goo.gl/MjHPaA1SNxJQTrdM9',
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
