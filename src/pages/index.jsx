import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from '../components/Helmet';
import NightButton from '../components/NightButton';
import '../styles/index.css';
import Box from '../components/Box';
import RecentWorkCardList from '../components/RecentWorkCardList';

const IndexPage = () => {
  const imageQuery = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            name: { regex: "/home|profile/" }
            extension: { eq: "png" }
          }
        ) {
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

  const imageHome = imageQuery.allFile.nodes.find((x) => x.name === 'home1')
    .childImageSharp.fluid;
  const imageProfile = imageQuery.allFile.nodes.find(
    (x) => x.name === 'profile'
  ).childImageSharp.fluid;

  return (
    <main className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <Helmet title="Karson 🤘" />
      <NightButton />
      <section className="relative h-screen px-12" style={{ minHeight: 800 }}>
        <div
          className="h-4/6 flex flex-col justify-center items-center tracking-wider"
          style={{ minHeight: 600 }}
        >
          <div className="text-5xl text-center font-bold py-6">
            Front-end Dev, Designer, Ninja
          </div>
          <div className="text-xl text-center font-extralight">
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
            <button
              type="button"
              className="rounded-full outline-none focus:outline-none transform duration-200 -translate-x-2 -translate-y-2 active:translate-x-0 active:translate-y-0"
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
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full max-w-container md:w-container left-2/4 transform -translate-x-2/4 pointer-events-none">
          <Img fluid={imageHome} />
        </div>
      </section>

      <section className="bg-primary text-white px-12 pt-16 pb-64">
        <div className="w-full max-w-container m-auto flex flex-col justify-center items-center tracking-wider text-center">
          <div className="text-4xl font-bold py-6">
            Hi, I’m Karson. Nice to meet you.
          </div>
          <div className="text-lg font-extralight">
            I am a creative frontend developer, occasionally designer and
            illustrator. From Malaysia, based in KL. Previously, I worked at
            Singapore company as a full-stack Software Engineer, where I worked
            on delivering kick-ass campaigns and cutting edge web experiences.
            Aside from work, I am also an open-source enthusiast and have
            created projects that were listed in GitHub trending. My interests
            lie in solving problems related to user experience. I'm quietly
            confident, naturally curious, and perpetually working on improving
            my chops one design problem at a time. I have several years of
            experience as a front-end dev and currently working more onwards
            with React and other hip frameworks.
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
      {/* <div>krsn&apos;s dev-site@mac</div>

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
      </div> */}
    </main>
  );
};

export default IndexPage;
