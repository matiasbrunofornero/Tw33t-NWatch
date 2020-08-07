var data = require('../../data/data.json')
const extraCommands = require('../../commands/extraCommands');

module.exports = {
    '@disabled': false,

    beforeEach: function (nightwatch) {
        const landingPage = nightwatch.page.landingPage();
        landingPage.isTrendingsContentVisible();
        const loginPage = landingPage.goToLoginPage(nightwatch);
        loginPage.loginAs(data.user, data.password, nightwatch);
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Send a Direct Message': function (nightwatch) {
        const user = 'MatBF2';

        const homePage = nightwatch.page.homePage();
        const messagesPage = homePage.clickMessages(nightwatch);

        const random = extraCommands.default.setRandom(100000);
        const msg = 'Automated Message #';

        messagesPage.clickNewMessage().isMessagePopupDisplayed();
        messagesPage.searchUserToMessage(user);

        const conversationInfoPage = messagesPage.clickNext().clickInfo(nightwatch);
        conversationInfoPage.isUserInfoDisplayed(user, nightwatch);

        conversationInfoPage.clickBack(nightwatch)
        messagesPage.setMessage(msg, random).clickSend();
        messagesPage.isLatestMessageEqualsTo(msg + random);
    }
}