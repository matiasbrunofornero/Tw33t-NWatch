var data = require('../../data/data.json')

module.exports = {
    elements: {
        imgLogo: `*[contains(@class, 'android.widget.Image')]`,
        loginBtn: `//android.widget.Button[@text="Log in"]`,
        loadingSpinner: `//*[@text="0.0"]`,
        trendingsContent: `//android.view.View[@text="Timeline: Explore"]`,
        usernameInput: `//android.view.View[@text="Phone, email, or username"]//..//*[contains(@class, 'EditText')]`,
        passwordInput: `//android.view.View[@text="Password"]//..//*[contains(@class, 'EditText')]`,

        directMessagesBtn: `//android.view.View[@text="Direct Messages"]`,
        startConversationBtn: `//android.widget.Button[contains(@text, 'Start a conversation')]`,
        peopleSearchbox: `//*[contains(@class, 'EditText')]`
    },

    beforeEach: function (client) {
        client.useXpath()
            .pause(2000)
            .waitForElementNotPresent(this.elements.imgLogo, 10000)
            .waitForElementNotPresent(this.elements.loadingSpinner, 10000)
            .waitForElementVisible(this.elements.trendingsContent, 10000, `Page was loaded`)
            .click(this.elements.loginBtn)
            .waitForElementPresent(this.elements.usernameInput, 10000)
            .click(this.elements.usernameInput)
            .setValue(this.elements.usernameInput, data.user)
            .assert.attributeEquals(this.elements.loginBtn, "enabled", "false")
            .click(this.elements.passwordInput)
            .setValue(this.elements.passwordInput, data.password)
            .assert.attributeEquals(this.elements.loginBtn, "enabled", "true")
            .click(this.elements.loginBtn)
    },

    'send a message': function (client) {
        client.pause(5000)
            .waitForElementVisible(this.elements.directMessagesBtn, 10000)
            .click(this.elements.directMessagesBtn)
            .waitForElementVisible(this.elements.startConversationBtn, 10000)
            .click(this.elements.startConversationBtn)
            .pause(3000)
            .waitForElementVisible(this.elements.peopleSearchbox, 10000)
            .click(this.elements.peopleSearchbox)
            .setValue(this.elements.peopleSearchbox, `MatBF2`)
            .pause(20000)
    }
}