module.exports = {
    url: 'https://www.twitter.com',
    
    elements: {
        // imgLogo: '*[contains(@class, "android.widget.Image")]',
        loadingSpinner: '//*[@text="0.0"]',
        loginBtn: {
            selector: '//android.widget.Button[@text="Log in"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        isTrendingsContentVisible() {
            // return this.waitForElementNotPresent(this.elements.imgLogo)
            this.useXpath();
            return this.waitForElementNotPresent('//*[@text="0.0"]')
        },

        goToLoginPage(nightwatch) {
            nightwatch.pause(10000);
            this.waitForElementVisible('//android.widget.Button[@text="Log in"]', 10000);
            this.click('//android.widget.Button[@text="Log in"]');
            return nightwatch.page.androidLoginPage();
        }
    }]
};