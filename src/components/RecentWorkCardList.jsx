import React from 'react';
import data from '../data/recent-works.json';
import RecentWorkCard from './RecentWorkCard';

const RecentWorkCardList = (props) => {
  return (
    <div className="py-10 m-auto flex flex-wrap justify-center">
      {data.map((item, index) => (
        <RecentWorkCard key={index} data={item} />
      ))}
    </div>
  );
};

export default RecentWorkCardList;
