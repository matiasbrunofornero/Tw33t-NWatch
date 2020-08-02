var data = require('../../data/data.json')
const extraCommands = require('../../commands/extraCommands');

module.exports = {
    '@disabled': false,

    beforeEach: function (nightwatch) {
        const landingPage = nightwatch.page.androidLandingPage();
        landingPage.isTrendingsContentVisible();
        const loginPage = landingPage.goToLoginPage(nightwatch);
        loginPage.loginAs(data.user, data.password, nightwatch);
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Send a Direct Message': function (nightwatch) {
        const homePage = nightwatch.page.androidHomePage();
        const messagesPage = homePage.clickMessages(nightwatch);

        const random = extraCommands.default.setRandom(100000);
        const msg = 'Automated Message #';

        messagesPage.clickStartConversation();
        messagesPage.searchUserToMessage('MatBF2');

        messagesPage.setMessage(msg, random);
        messagesPage.clickSend();
    }
}