module.exports = {
    tags:['test09'],
    'Goes from google.com to [techcrunch]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'techcrunch')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke09a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('h3[class="r"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke09b.png');
        })
        .end();
    }
}
