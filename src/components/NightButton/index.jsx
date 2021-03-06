import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { setNewTheme, isCurrentDarkTheme } from '../../utils/theme';
import './nightButton.css';

const NightButton = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => isCurrentDarkTheme());

  useEffect(() => {
    if (isCurrentDarkTheme() !== isDarkMode)
      setNewTheme(isDarkMode ? 'dark' : 'light');
    props.onToggle();
  }, [isDarkMode]);

  const data = useStaticQuery(
    graphql`
      query moonImg {
        file(name: { eq: "moon" }, extension: { eq: "png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const moonImg = data.file.childImageSharp.fluid;

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="absolute right-4 top-4">
      <label className="relative inline-block w-10 h-5">
        <input
          type="checkbox"
          className="hidden w-0 h-0"
          onChange={() => setIsDarkMode((state) => !state)}
        />
        <span
          className="slider absolute rounded-full top-0 bottom-0 left-0 right-0 border-4 border-gray-200 cursor-pointer"
          data-checked={isDarkMode}
        />
        <div
          className="circle absolute inline-block rounded-full w-7 h-7 bg-primary top-0 left-0 transition-transform duration-500 cursor-pointer flex justify-center items-center"
          data-checked={isDarkMode}
        >
          <Img fluid={moonImg} className="w-3" />
        </div>
      </label>
    </div>
  );
};

export default NightButton;
