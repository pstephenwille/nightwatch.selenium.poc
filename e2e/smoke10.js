module.exports = {
    tags:['test10'],
    'Goes to google.com and searches [docker]': function(browser) {
        browser
        .url('http://google.com')
        .waitForElementVisible('body', 1000);
        browser.element('css selector', 'input', function(result) {
            browser.expect.element('input').to.be.present;
            browser.setValue('input[autocomplete="off"]', 'docker')
            .saveScreenshot(browser.options.screenshotsPath+'/smoke10a.png')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('h3[class="r"]', 1000)
            .saveScreenshot(browser.options.screenshotsPath +'/smoke10b.png');
        })
    }
}
