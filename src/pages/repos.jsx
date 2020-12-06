import React from 'react';
import { useQuery } from 'react-query';
import Card from '../components/Card';
import { getGithubRepos } from '../utils/api';
import { Helmet } from 'react-helmet';

const ReposPage = () => {
  const {
    data,
    error,
    status,
    isLoading,
    isFetching,
    isSuccess,
  } = useQuery('githubRepos', getGithubRepos, { refetchOnWindowFocus: false });

  return (
    <main className="relative min-h-screen bg-gray-100 text-black dark:bg-gray-700 dark:text-white">
      <Helmet title="Github Repositories" />
      {isSuccess && (
        <div className="flex flex-wrap justify-center">
          {data.map((repo, index) => (
            <Card key={index} data={repo} />
          ))}
        </div>
      )}
      {(isLoading || isFetching) && (
        <div className="fixed top-0 left-0 h-screen w-full grid">
          <div className="place-self-center text-xl bg-yellow-500 rounded-xl p-4 px-6">
            loading...
          </div>
        </div>
      )}
    </main>
  );
};

export default ReposPage;
