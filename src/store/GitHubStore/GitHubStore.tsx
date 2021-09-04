import ApiStore from '../../shared/store/ApiStore';
import {IGitHubStore} from "./types";
import {ApiResponse, HTTPMethod} from "../../shared/store/ApiStore/types";
import {GetOrganizationReposListParams, RepoItem} from './types';



export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com'); // TODO: не забудьте передать baseUrl в конструктор

    // TODO: реализовать интерфейс IGitHubStore

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            headers: {
                Accept: "application/vnd.github.v3+json"
            },
            data: {},
            endpoint: `/orgs/${params.organizationName}/repos`,
        });
    }
}
