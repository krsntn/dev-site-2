import React from 'react';

const NotFound = () => {
  if (typeof window !== 'undefined') {
    window.location.pathname = '/';
  }

  return <div className="min-h-screen" />;
};

export default NotFound;
