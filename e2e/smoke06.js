module.exports = {
    tags:['test06'],
    'Goes from google.com to [dzone]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'dzone')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke06a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('h3[class="r"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke06b.png');
        })
        .end();
    }
}
