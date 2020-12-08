import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MdxTemplate from '../templates/MdxTemplate';
import VscodeMdx from '../markdown-pages/vscode/vscode.md';
import css from '../styles/bgImage.module.scss';

const VsCode = ({ data }) => {
  let post = data.mdx;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <main
      className={`relative min-h-screen bg-gray-100 text-black dark:bg-gray-700 dark:text-white ${css.bgImage}`}
    >
      <Helmet title="VS Code Configuration" />
      <div>
        <Img fluid={featuredImgFluid} className="max-h-80 object-cover" />
      </div>
      <div className="py-10 flex justify-center ">
        <MdxTemplate>
          <VscodeMdx />
        </MdxTemplate>
      </div>
    </main>
  );
};

export const query = graphql`
  query vscode {
    mdx(frontmatter: { title: { eq: "Vscode" } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default VsCode;
