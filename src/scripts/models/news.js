export default class News {
    constructor(title, description, link, category, country, language) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.category = category;
        this.country = country;
        this.language = language;
    }

    isValid() {
        return this.title && this.description && this.link;
    }
}