import React from 'react';
import { initialLoadTheme } from './src/utils/theme';

const InitialSiteTheme = () => {
  const codeToRunOnClient = `
(function() {
  ${initialLoadTheme}
})()
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InitialSiteTheme />);
};
