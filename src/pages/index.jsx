import React from 'react';
import { Link } from 'gatsby';
import Helmet from '../components/Helmet';
import NightButton from '../components/NightButton';
import '../styles/index.css';

const data = [
  {
    name: 'facebook',
    description: 'general identity',
    type: 'external',
    url: 'https://www.facebook.com/krsntn',
  },
  {
    name: 'twitter',
    description: 'gossip place',
    type: 'external',
    url: 'https://www.twitter.com/ooneoneo',
  },
  {
    name: 'instagram',
    description: 'showing off handsome face',
    type: 'external',
    url: 'https://www.instagram.com/krsn.xyz',
  },
  {
    name: 'github repos',
    description: 'some fun work during the weekend',
    type: 'internal',
    url: '/repos',
  },
  {
    name: 'portfolios',
    description: 'few small projects in production',
    type: 'internal',
    url: '/portfolio',
  },
  {
    name: 'setup',
    description: 'workstation setup',
    type: 'internal',
    url: '/uses',
  },
  {
    name: 'vscode',
    description: 'main engine configuration',
    type: 'internal',
    url: '/vscode',
  },
];

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-black dark:bg-black dark:text-terminalgreen">
      <Helmet title="Home Page" />
      <NightButton />
      <div>krsn&apos;s dev-site@mac</div>

      <div className="mt-10">few years experience in front end development</div>

      <div className="mt-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="w-36 inline-block">
              {'-->'}{' '}
              {item.type === 'external' ? (
                <a className="textShadow" href={item.url}>
                  {item.name}
                </a>
              ) : (
                <Link className="textShadow" to={item.url}>
                  {item.name}
                </Link>
              )}
            </div>
            <div className="inline-block">
              <span className="text-gray-400">
                ----- {item.description} -----
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;
