import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="h-40 flex flex-col justify-around items-center text-white">
        <div className="text-7xl">404 NOT FOUND.</div>
        <Link to="/">
          <button
            type="button"
            className="bg-primary text-base text-white px-3 py-2 rounded border-b-4 border-primary0 hover:bg-primary3 hover:border-primary"
          >
            back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
