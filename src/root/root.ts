// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from '../store/GitHubStore/GitHubStore';
import {RepoItem} from "../store/GitHubStore/types";
import {ApiResponse} from "../shared/store/ApiStore/types";

function getReposByOrg() {
  const gitHubStore = new GitHubStore();

  const EXAMPLE_ORGANIZATION = 'ktsstudio';

  gitHubStore.getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION
  }).then((result: ApiResponse<RepoItem[], any>) => {
    console.log(result.data.map((repo: { name: any; }) => {
      return repo.name;
    })); // в консоли появится список репозиториев в ktsstudio
  })
}

export default getReposByOrg;

// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
