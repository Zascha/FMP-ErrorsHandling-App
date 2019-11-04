export class BadRequestFetchResponse extends Error {
    constructor() {
        super("Invalid request")
        this.status = 400;
        this.image = 'sources/error.svg'
    }
}

export class UnathorizedFetchResponse extends Error {
    constructor() {
        super("API Key is missing")
        this.status = 401;
        this.image = 'sources/error.svg'
    }
}

export class PageNotFoundFetchResponseextends extends Error {
    constructor() {
        super("Page not found")
        this.status = 404;
        this.image = 'sources/error.svg'
    }
}

export class ServerErrorFetchResponse extends Error {
    constructor() {
        super("Internal server error")
        this.status = 500;
        this.image = 'sources/error.svg'
    }
}