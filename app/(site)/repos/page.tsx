async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/pdovhomilja/repos"
  );

  await new Promise((resolve) => setTimeout(resolve, 10000));

  const repos = await response.json();
  return repos;
}

type Props = {};

interface Repo {
  name: string;
}

const ReposPage = async (props: Props) => {
  const repos = await fetchRepos();

  //console.log(repos, "repos");

  return (
    <div className="flex flex-col w-full h-full">
      <h1>My Repos</h1>
      {repos?.map((repo: Repo) => (
        <div key={repo.name}>{repo.name}</div>
      ))}
    </div>
  );
};

export default ReposPage;
