const { setWorldConstructor } = require('cucumber')

class CustomWorld {
    constructor() {
        this.savedResponse = null
    }

    setResponse(response) {
        this.savedResponse = response
    }

    getResponse() {
        return this.savedResponse
    }
}

setWorldConstructor(CustomWorld)
