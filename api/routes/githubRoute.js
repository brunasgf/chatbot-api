
class GitHubRoutes {
    constructor(app, gitHubCtrl) {
        this.gitHubCtrl = gitHubCtrl
        this.app = app
    }

    init() {
        this.app.get("/searchInRepos/:query", this.getRepositories.bind(this))
    }

    getRepositories(req, res) {
        const response = this.gitHubCtrl.getInRepos(req.params.query)
        res.status(200)
        res.send(response)
    }
}

module.exports = GitHubRoutes