module.exports = {
    elements: {
        loginBtn: `//XCUIElementTypeButton[@name="Log in"]`,
        usernameInput: `//XCUIElementTypeStaticText[@name="Phone, email, or username"]//..//..//XCUIElementTypeTextField`,
        pwdInput: `//XCUIElementTypeStaticText[@name="Password"]//..//..//XCUIElementTypeSecureTextField`
    },

    'POC iOS Testing': function (nightwatch) {
        nightwatch.url("http://www.twitter.com");
        nightwatch.pause(10000);
        nightwatch.useXpath();

        nightwatch.click(this.elements.loginBtn);
        nightwatch.pause(5000);

        nightwatch.setValue(this.elements.usernameInput, "matiasbrunousers@gmail.com");
        nightwatch.setValue(this.elements.pwdInput, "p455word");
        nightwatch.pause(5000);

        nightwatch.click(this.elements.loginBtn);
        nightwatch.pause(10000);

        nightwatch.end();
    }
}