import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from '../components/Helmet';
import NightButton from '../components/NightButton';
import '../styles/index.css';
import Box from '../components/Box';
import RecentWorkCardList from '../components/RecentWorkCardList';
import { isCurrentDarkTheme } from '../utils/theme';

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
    <main className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <Helmet />
      <section
        className="relative w-full h-screen px-12"
        style={{ minHeight: 800 }}
      >
        <Img
          fluid={skyImage}
          className="bottom-0 left-0 w-full h-screen"
          style={{ position: 'absolute' }}
          imgStyle={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
        <Img
          fluid={mountain3}
          className="bottom-0 left-0 w-full h-screen hidden md:block mountain3"
          style={{ position: 'absolute' }}
          imgStyle={{
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
        <Img
          fluid={mountain2}
          className="bottom-0 left-0 w-full h-screen hidden md:block mountain2"
          style={{ position: 'absolute' }}
          imgStyle={{
            objectFit: 'contain',
            objectPosition: 'bottom center',
            top: '100px',
            left: '-10%',
          }}
        />
        <div className="absolute left-0 bottom-0 w-full bg-gradient-to-b from-white dark:from-black to-primary h-3 hidden md:block black-shadow" />

        <div
          className="absolute left-0 right-0 h-4/6 flex flex-col justify-center items-center tracking-wider"
          style={{ minHeight: 600 }}
        >
          <div className="bg-gray-100 dark:bg-gray-600 bg-opacity-50 rounded-lg text-2xl md:text-5xl text-center font-bold p-6 m-2 text-gray-700 dark:text-gray-300">
            hey("karson");
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 bg-opacity-50 rounded-lg text-1xl md:text-3xl text-center font-bold p-4 m-2 text-gray-700 dark:text-gray-300">
            Front-end Dev, Open Source Enthusiast, Ninja
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 bg-opacity-50 rounded-lg text-l md:text-xl text-center font-extralight p-4 m-2 text-gray-700 dark:text-gray-300">
            I design and code beautifully simple things, and I love what I do.
          </div>
          <div
            className="relative rounded-full bg-primary mt-12"
            style={{
              height: '50vw',
              width: '50vw',
              maxHeight: '10rem',
              maxWidth: '10rem',
            }}
          >
            <Img
              className="rounded-full"
              style={{
                height: '50vw',
                width: '50vw',
                maxHeight: '10rem',
                maxWidth: '10rem',
              }}
              fluid={imageProfile}
            />
          </div>
        </div>
        <Img
          fluid={mountain1}
          className="bottom-0 left-0 w-full h-screen hidden md:block mountain1"
          style={{ position: 'absolute' }}
          imgStyle={{
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
      </section>

      <section className="bg-primary text-white px-12 pt-16 pb-64">
        <div className="w-full max-w-container m-auto flex flex-col justify-center items-center tracking-wider text-center">
          <div className="text-4xl font-bold py-6 about-title">
            Hi, I’m Karson. Nice to meet you.
          </div>
          <div className="text-lg font-extralight about-desc">
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

      <div
        className="bg-primary"
        style={{
          height: 50,
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
        }}
      />

      <section className="-mt-60 px-12 pb-16">
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

      <section className="min-h-screen px-12">
        <div className="w-full max-w-container m-auto pt-20 flex flex-col justify-center items-center tracking-wider text-center">
          <div className="text-4xl font-bold py-6">Recent Works</div>
          <div className="text-lg font-extralight">
            Here are a few design projects I've worked on recently. Want to see
            more?{' '}
            <Link to="/repos/" className="text-primary hover:underline">
              /repos
            </Link>
            <RecentWorkCardList />
          </div>
        </div>
      </section>
      <NightButton onToggle={onNightButtonToggle} />
    </main>
  );
};

export default IndexPage;
