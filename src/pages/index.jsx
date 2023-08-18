import React, { useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from '../components/Helmet';
import Box from '../components/Box';
import RecentWorkCardList from '../components/RecentWorkCardList';
import { isCurrentDarkTheme } from '../utils/theme';
import data from '../data/external-link.json';
import waveDark from '../images/waves_dark.svg';
import waveLight from '../images/waves_light.svg';
import '../styles/index.css';

const sectionClasses =
  'w-full md:max-w-container_sm max-w-container_md min-h-screen m-auto py-16';

const floatClasses =
  'hidden lg:block fixed w-full max-w-container_lg left-2/4 px-10 transform -translate-x-1/2';

const IndexPage = () => {
  const imageQuery = useStaticQuery(
    graphql`
      query {
        allFile(filter: { extension: { regex: "/png|jpg|svg/" } }) {
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

  const waveSvg = isCurrentDarkTheme() ? waveDark : waveLight;

  useEffect(() => {
    require('../utils/scrollTrigger');
  }, []);

  return (
    <main>
      <Helmet />
      <div className={`${floatClasses} top-0`}>
        <div className="py-6 text-2xl font-semibold">karson</div>
      </div>

      <div className={`${floatClasses} bottom-0`}>
        <div className="text-center flex flex-col items-end mb-10">
          {data.map((item, index) => (
            <a href={item.url} key={index} className="my-2">
              <button type="button" className="p-2 rounded external-button">
                <span>{item.name}</span>
              </button>
            </a>
          ))}
        </div>
      </div>

      <section className="bg-gray-200 dark:bg-gray-700">
        <div
          className={`${sectionClasses} pb-0 text-center flex flex-col justify-center items-center`}
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
        </div>

        <div
          style={{
            backgroundImage: `url(${waveSvg})`,
            backgroundRepeat: 'none',
            backgroundSize: 'cover',
            aspectRatio: '16/9',
            width: '100%',
          }}
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
            I'm a creative frontend whiz who also dabbles in design and
            illustration, hailing from 🇲🇾 and chilling in KL. I used to do the
            full-stack gig at a cool company in 🇸🇬, where I cooked up awesome
            campaigns and served up some seriously slick web experiences. When
            I'm not doing that, you'll find me spreading the open-source love
            and making my mark on trendy GitHub projects. I'm all about nailing
            user experience hiccups and I've got the skills to back it up. I'm
            that chill, curious type who's always leveling up my design game,
            especially diving into React and other groovy frameworks. 😉
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
    </main>
  );
};

export default IndexPage;
