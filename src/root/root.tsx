// Здесь необходимо продемонстрировать создание и использование GitHubStore
import GitHubStore from "../store/GitHubStore/GitHubStore";

const getReposByOrg = async (organizationName: string) => {
  const gitHubStore = new GitHubStore();

  return await gitHubStore.getOrganizationReposList({
    organizationName: organizationName,
  });
};

export default getReposByOrg;