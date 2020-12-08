import React, { useEffect } from 'react';

const Footer = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="w-screen h-28 bg-primary p-10 flex justify-between items-center">
      <div className="text-3xl text-white font-bold">KT</div>
      <div className="text-white flex justify-around items-center">
        <button
          type="button"
          className="mx-1 px-4 py-2 rounded hover:bg-primary3 border-b-4 border-primary hover:border-primary2"
        >
          twitter
        </button>
        <button
          type="button"
          className="mx-1 px-4 py-2 rounded hover:bg-primary3 border-b-4 border-primary hover:border-primary2"
        >
          github
        </button>
        <button
          type="button"
          className="mx-1 px-4 py-2 rounded hover:bg-primary3 border-b-4 border-primary hover:border-primary2"
        >
          linkedin
        </button>
      </div>
    </div>
  );
};

export default Footer;
