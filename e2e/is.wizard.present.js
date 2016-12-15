module.exports = {
    tags:['wizard', 'ui'],
    'Check if Wizard is present': function(browser) {
        browser
        .url('https://www.expedia.com/Santa-Cruz-Hotels-Inn-At-Depot-Hill.h1058923.Hotel-Information?rm1=a2&chkin=03/27/2017&chkout=03/30/2017&kloud=false')
        .waitForElementVisible('body', 3000);
        browser.expect.element('#availability-wizard').to.be.present;
        browser.saveScreenshot(browser.options.screenshotsPath+'/wizard.png')
        .end();
    }
}
