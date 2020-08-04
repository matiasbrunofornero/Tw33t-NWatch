module.exports = {
    elements: {
        loginBtn: {
            selector: `//XCUIElementTypeButton[@name="Log in"]`,
            locateStrategy: 'xpath'
        },
        usernameInput: {
            selector: `//XCUIElementTypeStaticText[@name="Phone, email, or username"]//..//..//XCUIElementTypeTextField`,
            locateStrategy: 'xpath'
        },
        pwdInput: {
            selector: `//XCUIElementTypeStaticText[@name="Password"]//..//..//XCUIElementTypeSecureTextField`,
            locateStrategy: 'xpath'
        }
    },

    'POC iOS Testing': function (nightwatch) {
        nightwatch.url("http://www.twitter.com");
        nightwatch.pause(5000);
        nightwatch.useXpath();

        nightwatch.click(`//XCUIElementTypeButton[@name="Log in"]`);
        nightwatch.pause(10000);
        nightwatch.setValue(this.elements.usernameInput, "matiasbrunousers@gmail.com");
        nightwatch.setValue(this.elements.pwdInput, "p455word");
        nightwatch.click(this.elements.loginBtn);
        nightwatch.end();
    }
}