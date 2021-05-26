import React from 'react';

const RecentWorkCard = (props) => {
  const { data } = props;
  const {
    title,
    description,
    icons,
    link: { href, text },
  } = data;

  return (
    <div className="relative m-3 h-72 w-56 bg-gray-700 rounded-lg text-base">
      <div className="h-full p-6 flex flex justify-center items-center ">
        <div className="flex justify-center items-center font-medium text-white">
          {title}
        </div>
        <div className="h-full w-full bg-white dark:bg-black rounded-lg text-black dark:text-white flex flex-col justify-center items-center absolute opacity-0 transform duration-300 hover:opacity-100">
          <div className="py-2 px-4">{description}</div>
          <a href={href}>
            <button
              type="button"
              className="my-4 p-2 px-3 w-full rounded bg-green-500 hover:bg-green-600 text-white"
            >
              {text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentWorkCard;
