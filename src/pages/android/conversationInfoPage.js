module.exports = {
    elements: {
        backBtn: {
            selector: '//android.widget.Button[contains(@text, "Back")]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        isUserInfoDisplayed(user) {
            const userInfo = `//android.widget.Button[@text="Follow"]//..//..//android.view.View[contains(@text, "${user}")]`;
            return this.useXpath().waitForElementVisible(userInfo, 'User Info is visible');
        },

        clickBack(nightwatch) {
            this.click(this.elements.backBtn);
            return nightwatch.page.messagesPage();
        }
    }]
};