import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from '../components/Helmet';
import NightButton from '../components/NightButton';
import '../styles/index.css';
import Box from '../components/Box';
import RecentWorkCardList from '../components/RecentWorkCardList';
import { isCurrentDarkTheme } from '../utils/theme';
import data from '../data/external-link.json';

const sectionClasses =
  'w-full md:max-w-container_sm max-w-container_md min-h-screen m-auto py-16';

const floatClasses =
  'hidden lg:block fixed w-full max-w-container_lg left-2/4 px-10 transform -translate-x-1/2';

const IndexPage = () => {
  const imageQuery = useStaticQuery(
    graphql`
      query {
        allFile(filter: { extension: { regex: "/png|jpg/" } }) {
          nodes {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  );

  const imageProfile = imageQuery.allFile.nodes.find(
    (x) => x.name === 'profile'
  ).childImageSharp.fluid;

  const mountain1 = imageQuery.allFile.nodes.find((x) => x.name === 'mountain1')
    .childImageSharp.fluid;
  const mountain2 = imageQuery.allFile.nodes.find((x) => x.name === 'mountain2')
    .childImageSharp.fluid;
  const mountain3 = imageQuery.allFile.nodes.find((x) => x.name === 'mountain3')
    .childImageSharp.fluid;
  const sky = imageQuery.allFile.nodes.find((x) => x.name === 'sky')
    .childImageSharp.fluid;
  const nightsky = imageQuery.allFile.nodes.find((x) => x.name === 'nightsky')
    .childImageSharp.fluid;

  const [skyImage, setSkyImage] = useState(() =>
    isCurrentDarkTheme() ? nightsky : sky
  );

  useEffect(() => {
    require('../utils/scrollTrigger');
  }, []);

  function onNightButtonToggle() {
    setSkyImage(isCurrentDarkTheme() ? nightsky : sky);
  }

  return (
    <main>
      <Helmet />
      <div className={`${floatClasses} top-0`}>
        <div className="py-6 text-2xl font-semibold">karson</div>
      </div>

      <div className={`${floatClasses} bottom-0`}>
        <div className="text-center flex flex-col items-end mb-10">
          {data.map((item, index) => (
            <a href={item.url} key={index}>
              <button
                type="button"
                className="my-2 p-2 rounded bg-gray-700 hover:bg-gray-900 text-white"
              >
                {item.name}
              </button>
            </a>
          ))}
        </div>
      </div>

      <section
        className={`${sectionClasses} text-center flex flex-col justify-center items-center`}
      >
        <div className="hi rounded-lg text-6xl md:text-8xl font-black p-6 m-2">
          Hello World.
        </div>
        <div className="rounded-lg text-3xl md:text-6xl font-semibold p-4 m-2">
          Front-end Dev, Open Source Enthusiast, Ninja
        </div>
        <div className="rounded-lg text-2xl md:text-5xl font-extralight p-4 m-2">
          I design and code beautifully simple things, and I love what I do.
        </div>
        <Img
          className="profile-image relative rounded-full my-12"
          style={{
            height: '50vw',
            width: '50vw',
            maxHeight: '10rem',
            maxWidth: '10rem',
          }}
          fluid={imageProfile}
        />
      </section>

      <section className={`${sectionClasses} grid grid-cols-6`}>
        <div className="col-start-1 col-end-7">
          <div className="text-8xl py-6 text-left about-title">
            More about me...
          </div>
        </div>
        <div className="col-start-2 col-end-7">
          <div className="about-desc text-4xl font-extralight leading-normal text-right">
            I am a creative frontend developer, occasionally designer and
            illustrator. From Malaysia, based in KL. Previously, I worked at
            Singapore company as a full-stack Software Engineer, where I worked
            on delivering kick-ass campaigns and cutting edge web experiences.
            Aside from work, I am also an open-source enthusiast and had
            contributed to several projects that were listed in GitHub trending.
            My interests lie in solving problems related to user experience. I'm
            quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I have several
            years of experience as a front-end dev and currently focusing more
            towards React related tech and other hip frameworks.
          </div>
        </div>
      </section>

      {/* <div
        className="bg-primary"
        style={{
          height: 50,
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
        }}
      /> */}

      <section className={`${sectionClasses}`}>
        <div className="flex justify-center">
          <div
            className="min-h-96 max-w-container bg-white border border-gray-300 rounded-lg flex justify-center flex-wrap"
            style={{
              boxShadow: '0 5px 5px 0 rgba(200, 200, 200, 0.5)',
            }}
          >
            <div className="flex-1 min-w-full md:min-w-0">
              <Box
                data={{
                  title: 'Front-end Dev',
                  desc:
                    'like to code things from scratch, and enjoy bringing ideas to life in the browser. ',
                  title2: 'Languages I speak:',
                  desc2: 'Reactjs, Gatbsyjs, Sass, Less',
                  title3: 'Dev Tools:',
                  desc3: [
                    'AWS',
                    'Bitbucket',
                    'Bootstrap',
                    'Codepen',
                    'Firebase',
                    'Github',
                    'Gitlab',
                    'Netlify',
                    'macOS',
                    'Terminal',
                    'Tailwind',
                    'VS Code',
                  ],
                }}
              />
            </div>
            <div className="flex-1 min-w-full md:min-w-0 border md:border-t-0 border-b-0 border-r-0">
              <Box
                data={{
                  title: 'Designer',
                  desc:
                    'value simple content structure, clean design patterns, and thoughtful interactions.',
                  title2: 'Things I enjoy designing:',
                  desc2: 'UX, UI, Web, Mobile, Apps, Logos',
                  title3: 'Design Tools:',
                  desc3: [
                    'Figma',
                    'Illustrator',
                    'Pen & Paper',
                    'Photoshop',
                    'Sketch',
                    'Webflow',
                    'Zeplin',
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClasses}`}>
        <div className="w-full flex flex-col justify-center items-center tracking-wider text-center">
          <div className="recent-work text-8xl py-6">Recent Work...</div>
          <div className="text-2xl font-extralight">
            Here are a few design projects I've worked on recently. Want to see
            more?{' '}
            <Link
              to="/repos/"
              className="text-gray-700 dark:text-white font-medium underline"
            >
              /repos
            </Link>
            <RecentWorkCardList />
          </div>
        </div>
      </section>
      {/* <NightButton onToggle={onNightButtonToggle} /> */}
    </main>
  );
};

export default IndexPage;
