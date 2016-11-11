module.exports = {
    tags:['test02', 'ui'],
    'Goes to google.com and searches [docker]': function(browser) {
        browser
        .url('http://arstechnica.com')
        .waitForElementVisible('body', 1000)
        .saveScreenshot(browser.options.screenshotsPath +'/smoke02.png')
        .end()
    }
}
