import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const GlobalLayout = ({ children }) => {
  // const [showFooter, setShowFooter] = useState();

  // useEffect(() => {
  //   const pathname = window.location.pathname;
  //   setShowFooter(pathname !== '/');
  // }, [window.location.pathname]);

  return (
    <React.Fragment>
      <div className="bg-gray-100 text-gray-700 dark:text-gray-300 px-8 dark:bg-gray-800 dark:text-white">
        {children}
      </div>
      {/* {showFooter && <Footer />} */}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default GlobalLayout;
