const rp = require('request-promise')

class Request {
    constructor() {
        this.RPAP = rp.defaults({
            resolveWithFullResponse: true,
            headers: {
                'Authorization': `Bearer 306d7ff3e4010ba7bf1d3d6d9d7735fe52395a64`,
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