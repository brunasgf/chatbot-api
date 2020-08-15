const rp = require('request-promise')

class Request {
    constructor() {
        this.RPAP = rp.defaults({
            resolveWithFullResponse: true,
            headers: {
                'Authorization': `Bearer 71edb2cfbb05f9d6695e9eaa740999f8636c332b`,
                'User-Agent': 'Awesome-Octocat-App'
            }
        })
    }

    async post(url, body) {
        const options = {
            method: 'POST',
            uri: url,
            body: body,
            json: true
        }

        try {
            return await this.RPAP(options)
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

module.exports = Request