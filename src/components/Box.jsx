import { Link } from 'gatsby';
import React from 'react';

const Box = (props) => {
  const { data } = props;
  const { title, desc, title2, desc2, title3, desc3 } = data;

  return (
    <div className="text-center py-10 px-4">
      <div className="pb-8 text-gray-700 text-2xl font-black">{title}</div>
      <div className="py-2 pb-4 text-black font-extralight">{desc}</div>
      <div className="pt-4 pb-2 text-gray-700 text-xl font-semibold">
        {title2}
      </div>
      <div className="py-2 pb-4 text-black font-extralight">{desc2}</div>
      <div className="pt-4 pb-2 text-gray-700 text-xl font-semibold">
        {title3}
      </div>
      <div className="py-2 text-black font-extralight">
        <ul>
          {desc3.map((item, index) => (
            <ol key={index} className="py-0.5">
              {item === 'VS Code' && (
                <Link
                  to="/vscode"
                  className="text-gray-700 font-medium underline"
                >
                  {item}
                </Link>
              )}
              {item === 'macOS' && (
                <Link
                  to="/macos"
                  className="text-gray-700 font-medium underline"
                >
                  {item}
                </Link>
              )}
              {!['VS Code', 'macOS'].includes(item) && item}
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Box;
