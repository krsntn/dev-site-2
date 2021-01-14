import React from 'react';
import { Helmet } from 'react-helmet';

const meta = {
  title: 'Karson Tan 👨‍💻',
  description: `Front End Dev, Sport Enthusiast & Occasional Graphic Designer making the web a little better place and trying to earn a living. 🤟🎊🎉`,
  url: 'https://dev.krsn.xyz',
  image: 'https://i.imgur.com/VHo6qz0.jpg',
};

const Metadata = () => {
  return (
    <div>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content={meta.title} />
        <meta itemprop="description" content={meta.description} />
        <meta itemprop="image" content={meta.image} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>
    </div>
  );
};

export default Metadata;
