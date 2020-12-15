import React, { useEffect } from 'react';
import data from '../data/external-link.json';

const Footer = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="w-screen h-28 bg-primary p-10 flex justify-between items-center">
      <div>
        <div className="text-xs text-white font-base">Crafted by </div>
        <div className="text-3xl text-white font-bold">KT</div>
      </div>
      <div className="text-white flex justify-around items-center">
        {data.map((item, index) => (
          <a href={item.url}>
            <button
              key={index}
              type="button"
              className="mx-1 px-4 py-2 rounded hover:bg-primary3 border-b-4 border-primary hover:border-primary2"
            >
              {item.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
