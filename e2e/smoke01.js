module.exports = {
    tags:['test01', 'ui'],
    'Goes from google.com to [arstechnica.com]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'ars technica')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke01a.png')
            .pause(5000)
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('a[href="http://arstechnica.com/"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke01b.png');
        })
        .end();
    }
}
