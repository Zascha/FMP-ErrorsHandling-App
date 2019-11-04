import $ from "jquery";

export function renderNewsData(newsArray) {
    $('.content').empty();
    $.get("./views/_NewsCard.html", function (html) {
        newsArray.forEach(item => {
            $('.content').append(toNewsCard(html, item));
        })
    });
}

export function renderErrorData(error) {
    $('.content').empty();
    $.get("./views/_ErrorCard.html", function (html) {
        $('.content').append(toErrorCard(html, error));
    });
}

function toNewsCard(html, news) {
    html = html.replace(/@news.category/g, news.category);
    html = html.replace(/@news.title/g, news.title);
    html = html.replace(/@news.description/g, news.description);
    html = html.replace(/@news.language/g, news.language);
    html = html.replace(/@news.country/g, news.country);
    return html.replace(/@news.link/g, news.link);
}

function toErrorCard(html, error) {
    html = html.replace(/@error.src/g, error.image);
    html = html.replace(/@error.code/g, error.status);
    return html.replace(/@error.message/g, error.message);
}