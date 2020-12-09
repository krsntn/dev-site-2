import './src/styles/global.css';

const React = require('react');
const GlobalLayout = require('./src/components/GlobalLayout').default;

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};
