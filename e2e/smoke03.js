module.exports = {
    tags:['test03'],
    'Goes from google.com to [toms hardware]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'toms hardware')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke01a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('h3[class="r"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke01b.png');
        })
        .end();
    }
}
