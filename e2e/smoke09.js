module.exports = {
    tags:['test10'],
    'Goes from google.com to arstechnica.com': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'docker')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke09a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('a[href="http://docker.com/"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke09b.png');
        })
        .end();
    }
}
