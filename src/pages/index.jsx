import React from 'react';
import { Link } from 'gatsby';
import Helmet from '../components/Helmet';

const data = [
	{
		name: 'facebook',
		description: 'general identity',
		url: 'https://www.facebook.com/krsntn',
	},
	{
		name: 'twitter',
		description: 'gossip place',
		url: 'https://www.twitter.com/ooneoneo',
	},
	{
		name: 'instagram',
		description: 'showing off handsome face',
		url: 'https://www.instagram.com/krsn.xyz',
	},
	{
		name: 'github repos',
		description: 'some fun work during the weekend',
		url: '/repos',
	},
	{
		name: 'portfolios',
		description: 'few small projects in production',
		url: '/portfolio',
	},
];

const IndexPage = () => {
	return (
		<main className="min-h-screen bg-gray-100 text-black dark:bg-black dark:text-terminalgreen">
			<Helmet title="Home Page" />
			<div className="test" />
			<div>krsn&apos;s dev-site@mac</div>

			<div className="mt-10">few years experience in front end development</div>

			<div className="mt-10">
				{data.map((item, index) => (
					<div key={index}>
						<div className="w-36 inline-block">
							{'-->'} <Link to={item.url}>{item.name}</Link>
						</div>
						<div className="inline-block">
							<span className="text-gray-400">
								----- {item.description} -----
							</span>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default IndexPage;
