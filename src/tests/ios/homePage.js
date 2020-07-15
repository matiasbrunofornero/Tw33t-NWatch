var data = require('../../data/data.json')

module.exports = {
    // elements: {
    //     imgLogo: `*[contains(@class, 'android.widget.Image')]`,
    //     loginBtn: `//android.widget.Button[@text="Log in"]`,
    //     loadingSpinner: `//*[@text="0.0"]`,
    //     trendingsContent: `//android.view.View[@text="Timeline: Explore"]`,
    //     usernameInput: `//android.view.View[@text="Phone, email, or username"]//..//*[contains(@class, 'EditText')]`,
    //     passwordInput: `//android.view.View[@text="Password"]//..//*[contains(@class, 'EditText')]`,

    //     directMessagesBtn: `//android.view.View[@text="Direct Messages"]`,
    //     startConversationBtn: `//android.widget.Button[contains(@text, 'Start a conversation')]`,
    //     peopleSearchbox: `//*[contains(@class, 'EditText')]`
    // },

    'POC Android Testing': function (nightwatch) {
        console.log("ios test");
        // const landingPage = nightwatch.page.androidLandingPage();
        // landingPage.isTrendingsContentVisible();
        // const loginPage = landingPage.goToLoginPage(nightwatch);
        // loginPage.setUsername(data.user);
        // loginPage.setPassword(data.password);
        // loginPage.clickLogin(nightwatch);
        // nightwatch.pause(5000);
    }
}