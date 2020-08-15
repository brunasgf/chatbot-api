const Request = require('../request/request')
const _ = require('lodash')

class GitHubCtrl {
    constructor() {
        this.repos = []
        this.request = new Request()
    }

    async getRepositories() {
        const url = "https://api.github.com/graphql";

        let body = {
            query: `
                {
                    organization(login: "takenet") {
                        repositories(orderBy: {field: CREATED_AT, direction: ASC}, first: 100) {
                            nodes {
                                primaryLanguage{
                                    name
                                }
                                name
                                description
                            }
                        }
                    }
                }`,
            variables: {},
        };

        const response = await this.request.post(url, body);
        const repositories = response.body.data.organization.repositories.nodes

        if (repositories && repositories.length) {
            for (let i = 0; i < repositories.length; i++) {
                const repository = repositories[i]

                if (repository && repository.primaryLanguage && repository.primaryLanguage.name === "C#") {
                    this.repos.push(repository)
                }
            }
        }
    }

    getInRepos(query) {
        const repos = []
        const defaultRepo = {
            name: null,
            description: null
        }

        console.log(this.repos)
        console.log("\n\n\n\n\n\n\n")

        for (let i = 0; i < this.repos.length; i++) {
            const repo = _.clone(defaultRepo)
            if (
                (this.repos[i].name !== null && this.repos[i].name.indexOf(query) !== -1) ||
                (this.repos[i].description !== null && this.repos[i].description.indexOf(query) !== -1)
            ) {
                repo.name = this.repos[i].name
                repo.description = this.repos[i].description

                repos.push(repo)
            }
        }

        return repos
    }
}

module.exports = GitHubCtrl