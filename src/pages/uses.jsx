import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import MdxTemplate from '../templates/MdxTemplate';
import '../styles/bgImage.css';

const Uses = (props) => {
  const data = useStaticQuery(
    graphql`
      query uses {
        mdx(frontmatter: { title: { eq: "Uses" } }) {
          body
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  let post = data.mdx;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <main className="relative min-h-screen bg-gray-100 text-black dark:bg-gray-700 dark:text-white bgImage">
      <Helmet title="VS Code Configuration" />
      <div>
        <Img fluid={featuredImgFluid} className="max-h-80 object-cover" />
      </div>
      <div className="py-10 flex justify-center ">
        <MdxTemplate>{post.data}</MdxTemplate>
      </div>
    </main>
  );
};

export default Uses;
