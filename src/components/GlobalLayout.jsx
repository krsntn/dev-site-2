import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const GlobalLayout = ({ children }) => {
  const [showFooter, setShowFooter] = useState();

  useEffect(() => {
    const pathname = window.location.pathname;
    setShowFooter(pathname !== '/');
  }, [window.location.pathname]);

  return (
    <div>
      <div>{children}</div>
      {showFooter && <Footer />}
    </div>
  );
};

export default GlobalLayout;
