module.exports = {
    elements: {
        loadingSpinner: {
            selector: '//*[@text="0.0"]',
            locateStrategy: 'xpath'
        },
        loginBtn: {
            selector: '//android.widget.Button[@text="Log in"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        isTrendingsContentVisible() {
            return this.waitForElementNotPresent(this.elements.loadingSpinner)
        },

        goToLoginPage(nightwatch) {
            nightwatch.pause(3000);
            this.waitForElementVisible(this.elements.loginBtn, 3000);
            this.click(this.elements.loginBtn);
            return nightwatch.page.androidLoginPage();
        }
    }]
};