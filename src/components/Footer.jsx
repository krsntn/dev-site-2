import React from 'react';
import data from '../data/external-link.json';

const Footer = (props) => {
  return (
    <div className="w-screen bg-primary p-2 md:p-10 flex flex-col md:flex-row flex-wrap justify-between items-center">
      <div className="flex flex-col justify-center items-center md:items-start py-8 md:py-0">
        <div className="text-xs text-white font-base">Crafted by </div>
        <div className="text-3xl text-white font-bold">KT</div>
      </div>
      <div className="text-white flex flex-col md:flex-row justify-around items-center">
        {data.map((item, index) => (
          <a href={item.url} key={index}>
            <button
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
