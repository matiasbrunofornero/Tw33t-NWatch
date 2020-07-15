module.exports = {
    elements: {
        toogleBtn: `//XCUIElementTypeSwitch[@name="toggleButton"]`
        // loginBtn: `//android.widget.Button[@text="Log in"]`,
        // loadingSpinner: `//*[@text="0.0"]`,
        // trendingsContent: `//android.view.View[@text="Timeline: Explore"]`,
        // usernameInput: `//android.view.View[@text="Phone, email, or username"]//..//*[contains(@class, 'EditText')]`,
        // passwordInput: `//android.view.View[@text="Password"]//..//*[contains(@class, 'EditText')]`,

        // directMessagesBtn: `//android.view.View[@text="Direct Messages"]`,
        // startConversationBtn: `//android.widget.Button[contains(@text, 'Start a conversation')]`,
        // peopleSearchbox: `//*[contains(@class, 'EditText')]`
    },

    'POC iOS Testing': function (nightwatch) {
        console.log("ios test");
        nightwatch.pause(10000);
        nightwatch.useXpath();
        nightwatch.waitForElementPresent(this.elements.toogleBtn, 10000)
        nightwatch.click(this.elements.toogleBtn);
        nightwatch.pause(3000);
        nightwatch.click(this.elements.toogleBtn);
        nightwatch.pause(3000);
        nightwatch.click(this.elements.toogleBtn);
        nightwatch.pause(3000);
        nightwatch.click(this.elements.toogleBtn);
        nightwatch.pause(3000);
        nightwatch.click(this.elements.toogleBtn);
        nightwatch.pause(3000);
        nightwatch.click(this.elements.toogleBtn);
    }
}