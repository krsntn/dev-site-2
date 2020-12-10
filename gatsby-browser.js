import './src/styles/global.css';

import React from 'react';
import GlobalLayout from './src/components/GlobalLayout';

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};
