const GitHubRoute = require('./githubRoute');

class Routes {
    constructor(app, gitHubCtrl) {
        this.gitHubRoute = new GitHubRoute(app, gitHubCtrl)
    }

    init() {
        this.gitHubRoute.init()
    }
}

module.exports = Routes