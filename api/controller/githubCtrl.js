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

        const defaultRepo = {
            id: "5",
            to: "1042221589186385@messenger.gw.msging.net",
            type: "application/vnd.lime.collection+json",
            content: {
                itemType: "application/vnd.lime.document-select+json",
                items: []
            }
        }

        const defaultItem = {
            header: {
                type: "application/vnd.lime.media-link+json",
                value: {
                    title: null,
                    text: null,
                    type: "image/jpeg",
                    uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
                }
            }
        }

        const repo = _.clone(defaultRepo)

        for (let i = 0; i < this.repos.length; i++) {
            const item = _.clone(defaultItem)
            if (
                (this.repos[i].name !== null && this.repos[i].name.indexOf(query) !== -1) ||
                (this.repos[i].description !== null && this.repos[i].description.indexOf(query) !== -1)
            ) {
                item.header.value.title = this.repos[i].name
                item.header.value.text = this.repos[i].description

                repo.content.items.push(item)
            }
        }
        return repo
    }
}

module.exports = GitHubCtrl
