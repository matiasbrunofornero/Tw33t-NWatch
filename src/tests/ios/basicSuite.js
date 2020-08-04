module.exports = {
    '@disabled': false,

    elements: {
        loginBtn: `//XCUIElementTypeButton[@name="Log in"]`,
        usernameInput: `//XCUIElementTypeStaticText[@name="Phone, email, or username"]//..//..//XCUIElementTypeTextField`,
        pwdInput: `//XCUIElementTypeStaticText[@name="Password"]//..//..//XCUIElementTypeSecureTextField`
    },

    beforeEach: function (nightwatch) {
        nightwatch.url("http://www.twitter.com");
        nightwatch.useXpath().click(this.elements.loginBtn);

        nightwatch.setValue(this.elements.usernameInput, "matiasbrunousers@gmail.com");
        nightwatch.setValue(this.elements.pwdInput, "p455word");
        nightwatch.click(this.elements.loginBtn);
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'POC iOS Testing': function (nightwatch) {
        console.log("POC iOS Testing");
    }
}