module.exports = {
    tags:['test07'],
    'Goes from google.com to [hackernews]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'hackernews')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke07a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('h3[class="r"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke07b.png');
        })
        .end();
    }
}
