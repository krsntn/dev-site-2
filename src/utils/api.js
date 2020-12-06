export async function getGithubRepos() {
  const res = await fetch(
    'https://api.github.com/users/krsntn/repos?sort=pushed'
  );
  return res.json();
}
