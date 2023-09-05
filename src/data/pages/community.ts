import {
  cliTool,
  emulatorTool,
  fclSDK,
  flowPortTool,
  jsTestingLibTool,
  vsCodeTool,
} from '../../data/tools';
import { type ContentNavigationListProps } from '../../ui/design-system/src/lib/Components/ContentNavigationList';
import { type ProjectCardProps } from '../../ui/design-system/src/lib/Components/ProjectCard';
import { allEvents } from '../events';
import { metadata } from '../metadata';

export const tools = [
  flowPortTool,
  emulatorTool,
  cliTool,
  vsCodeTool,
  fclSDK,
  jsTestingLibTool,
];

export const contentNavigationListItems: ContentNavigationListProps = {
  header: 'Explore More Content',
  contentNavigationItems: [
    {
      title: 'Learn',
      text: 'Learn more about the Flow blockchain, Cadence, and NFTs',
      link: '/learn',
      icon: 'learn',
    },
    {
      title: 'Tools',
      text: 'Tools that can help your development experience on Flow',
      link: '/tools',
      icon: 'tools',
    },
    {
      title: 'Concepts',
      text: 'Important concepts about Cadence and FCL',
      link: '/concepts/intro',
      icon: 'concepts',
    },
  ],
};

export const upcomingEvents = allEvents;

export const projects: ProjectCardProps[] = [
  {
    projectImage:
      'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
    heading: 'DEV.to',
    description:
      'A constructive and inclusive social network for software developers where you can interact with others in the Flow community',
    tags: ['Social Network'],
    projectLink: 'https://dev.to/onflow',
    author: {
      name: '',
      profileImage:
        'https://avatars.githubusercontent.com/u/62387156?s=200&v=4',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/flow_blockchain',
    githubLink: 'https://github.com/onflow',
  },
  {
    projectImage: 'https://academy.ecdao.org/ea-logo.png',
    heading: 'Emerald City',
    description: 'The first DAO built on the Flow Blockchain',
    tags: ['DAO'],
    projectLink: 'https://www.ecdao.org/',
    author: {
      name: 'Emerald City DAO',
      profileImage:
        'https://pbs.twimg.com/profile_images/1687225095557632005/tUCmv8_P_400x400.jpg',
    },
    numStars: 0,
    twitterLink:
      'https://twitter.com/emerald_dao?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    githubLink: 'https://github.com/onflow',
  },
  {
    projectImage: 'https://floats.city/island.png',
    heading: 'FLOAT',
    description:
      'A Flow enabled proof of attendance platform with over 2.2 million FLOATs claimed and 4600+ events created',
    tags: ['DAO'],
    projectLink: 'https://floats.city/',
    author: {
      name: 'Emerald City DAO',
      profileImage:
        'https://pbs.twimg.com/profile_images/1687225095557632005/tUCmv8_P_400x400.jpg',
    },
    numStars: 0,
    twitterLink:
      'https://twitter.com/emerald_dao?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    githubLink: 'https://github.com/muttoni/float',
  },
  {
    projectImage:
      'https://assets.website-files.com/5f734f4dbd95382f4fdfa0ea/627a308f0e66044bed3eb6d2_Flow-Illustration_shoe%201%20(1).png',
    heading: 'Flow Ecosystem Fund',
    description:
      'The $725 Million Flow Ecosystem Fund is designed to hypercharge innovation and growth across the Flow community.',
    tags: ['Ecosystem Fund', 'Grant'],
    projectLink: 'https://flow.com/ecosystemsupport',
    author: {
      name: 'Dapper Labs',
      profileImage:
        'https://pbs.twimg.com/profile_images/1415802673278853123/gTgTeEnZ_400x400.png',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/flow_blockchain',
    githubLink: 'https://github.com/muttoni/float',
  },
  {
    projectImage:
      'https://assets.website-files.com/5f734f4dbd95382f4fdfa0ea/62763e067575490bc83fe807_Group%20822.svg',
    heading: 'Flow Bug Bounty Program',
    description:
      'Get rewarded for finding security vulnerabilities in on of our products or platforms.',
    tags: ['Bounties', 'Bugs'],
    projectLink: 'https://flow.com/flow-responsible-disclosure',
    author: {
      name: 'Flow',
      profileImage:
        'https://avatars.githubusercontent.com/u/62387156?s=200&v=4',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/flow_blockchain',
    githubLink: 'https://github.com/onflow',
  },
  {
    projectImage:
      'https://buildspace.so/_next/image?url=https%3A%2F%2Fcdn.buildspace.so%2Fcourses%2Fflow-nft%2Fposter-normal.png&w=3840&q=75',
    heading: 'Build your own NFT collection on Flow',
    description:
      'Learn how to deploy your first Flow smart contract using Cadence and build a web3 React app to connect it together',
    tags: ['NFT', 'Cadence', 'Project'],
    projectLink: 'https://buildspace.so/p/nfts-on-flow',
    author: {
      name: 'Buildspace',
      profileImage:
        'https://img.api.cryptorank.io/coins/150x150.buildspace1668414728723.png',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/_buildspace',
    githubLink: 'https://github.com/buildspace',
  },
  {
    projectImage:
      'https://substackcdn.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9c14b8ac-0937-4fe7-9893-46d907c108b7_899x899.png',
    heading: 'Flowverse',
    description:
      'Flowverse is the central hub to discover everything on Flow Blockchain',
    tags: ['NFT', 'Project'],
    projectLink: 'https://www.flowverse.co/',
    author: {
      name: 'Flowverse',
      profileImage:
        'https://pbs.twimg.com/profile_images/1480354080123867138/66piiWGx_400x400.jpg',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/flowverse_',
    githubLink: 'https://twitter.com/flowverse_',
  },

  {
    projectImage:
      'https://pbs.twimg.com/profile_images/1689380364718850049/rCElOZT2_400x400.jpg',
    heading: 'Flovatar',
    description:
      'Flovatar is a next generation NFT creativity platform where people can become creator and make their characters with any combination they like.',
    tags: ['NFT', 'Project'],
    projectLink: 'https://flovatar.com/',
    author: {
      name: 'crash13override',
      profileImage: 'https://avatars.githubusercontent.com/u/1100260?v=4',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/flovatar',
    githubLink: 'https://github.com/crash13override/flovatar',
  },

  {
    projectImage:
      'https://pbs.twimg.com/profile_images/1685696696993341440/Qfh_-K41_400x400.jpg',
    heading: 'Flowty',
    description:
      'Flowty is a one-stop shop for all of your NFT needs on the Flow blockchain. From buying and selling to NFT-backed loans to NFT rentals, we have you covered.',
    tags: ['NFT', 'Project'],
    projectLink: 'https://www.flowty.io/',
    author: {
      name: 'Flowty',
      profileImage:
        'https://pbs.twimg.com/profile_images/1685696696993341440/Qfh_-K41_400x400.jpg',
    },
    numStars: 0,
    twitterLink: 'https://twitter.com/flowty_io',
    githubLink: 'https://twitter.com/flowty_io',
  },
];

export const secondaryNavSections = [
  { title: 'FLIPs', elementId: 'flips' },
  { title: 'Featured Initiatives', elementId: 'featured-initiatives' },
  {
    title: 'Tools',
    elementId: 'tools',
  },
  { title: 'From the Forum', elementId: 'from-the-forum' },
  {
    title: 'Explore More Content',
    elementId: 'explore-more-content',
  },
];

if (upcomingEvents.events.length > 0) {
  secondaryNavSections.unshift({
    title: 'Upcoming Events',
    elementId: 'upcoming-events',
  });
}

export const editPageUrl = `${metadata.githubRepoBaseUrl}/blob/main/app/data/pages/community.ts`;
