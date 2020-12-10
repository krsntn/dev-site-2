import React from 'react';
import { Helmet } from 'react-helmet';

const meta = {
  title: 'Karson Tan 🔥🔥',
  description: `Front End Dev, Sport Enthusiast & Occasional Graphic Designer making the web a little better place and trying to earn a living. 🤟🎊🎉`,
  url: 'https://dev2.krsn.xyz',
  image:
    'https://scontent.fkul8-1.fna.fbcdn.net/v/t1.0-9/960057_10200958229748887_640172796_n.jpg?_nc_cat=100&_nc_ohc=uG5usq73p8gAQmk0XudDY_ToYJW8DiSG-aRRT3ofbDLjHF3V8ElW8_0Nw&_nc_ht=scontent.fkul8-1.fna&oh=50a8c24db5dcdcc92760d1a7de9a5e36&oe=5E3F0215',
};

const Metadata = ({ title }) => {
  return (
    <div>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>{title}</title>
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
