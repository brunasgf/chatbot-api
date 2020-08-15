const app = require('./config/express')();
const port = app.get('port');

const Routes = require('./api/routes/index')

const GitHubCtrl = require('./api/controller/githubCtrl')
const gitHubCtrl = new GitHubCtrl()

gitHubCtrl.getRepositories()

const routes = new Routes(app, gitHubCtrl)
routes.init()

app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
});