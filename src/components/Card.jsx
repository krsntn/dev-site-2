import React from 'react';

const Card = (props) => {
	const { data } = props;
	const { name, html_url, description, language } = data;

	return (
		<div className="relative m-6 h-72 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm transform duration-200 hover:-translate-y-2">
			<div
				className="rounded-t-lg bg-gray-300 dark:bg-gray-900 flex justify-start items-center"
				style={{ height: 20 }}
			>
				<div className="rounded-full bg-red-700 h-2 w-2 ml-3 mr-1" />
				<div className="rounded-full bg-yellow-500 h-2 w-2 mr-1" />
				<div className="rounded-full bg-green-600 h-2 w-2 mr-1" />
			</div>
			<div
				className="p-6 flex flex-col justify-around text-black dark:text-white"
				style={{ height: 'calc(100% - 20px)' }}
			>
				<div className="">{name}</div>
				<div className="">{description}</div>
				<div className="">{language}</div>
				<a href={html_url}>
					<button className="p-2 px-3 w-full bg-green-500 rounded text-white">
						Learn More
					</button>
				</a>
			</div>
		</div>
	);
};

export default Card;
