module.exports = {
    tags:['test02'],
    'Goes to http://arstechnica.com': function(browser) {
        browser
        .url('http://arstechnica.com')
        .waitForElementVisible('body', 1000)
        .end();
    }
}
