module.exports = {
    tags:['test05'],
    'Goes from google.com to [infoworld]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'infoworld')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke05a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('h3[class="r"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke05b.png');
        })
        .end();
    }
}
