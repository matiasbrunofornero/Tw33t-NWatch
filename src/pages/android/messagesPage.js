module.exports = {
    elements: {
        newMessageBtn: {
            selector: `//android.widget.Button[contains(@text, 'Compose a Direct Message')]`,
            locateStrategy: 'xpath'
        },
        messagePopup: {
            selector: `//android.view.View[contains(@resource-id, 'modal-header')]`,
            locateStrategy: 'xpath'
        },
        searchPeopleInput: {
            selector: `//android.view.View[@text="Search people"]//*[contains(@class, "EditText")]`,
            locateStrategy: 'xpath'
        },
        nextBtn: {
            selector: `//android.widget.Button[contains(@text, 'Next')]`,
            locateStrategy: 'xpath'
        },
        infoBtn: {
            selector: `//android.widget.Button[contains(@text, 'Conversation info')]`,
            locateStrategy: 'xpath'
        },
        dmComposerInput: {
            selector: `//android.view.View[@text="Start a new message"]//*[contains(@class, "EditText")]`,
            locateStrategy: 'xpath'
        },
        dmComposerSendBtn: {
            selector: `//android.widget.Button[contains(@text, 'Send')]`,
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        clickNewMessage() {
            return this.click(this.elements.newMessageBtn);
        },

        isMessagePopupDisplayed() {
            return this.waitForElementVisible(this.elements.messagePopup,
                'Message Popup is visible');
        },

        searchUserToMessage(usr) {
            this.setValue(this.elements.searchPeopleInput, usr);
            return this.useXpath().click(`//android.widget.CheckBox[contains(@text, ${usr})]`);
        },

        clickNext() {
            return this.click(this.elements.nextBtn);
        },

        clickInfo(nightwatch) {
            this.click(this.elements.infoBtn);
            return nightwatch.page.conversationInfoPage();
        },

        setMessage(msg, random) {
            return this.setValue(this.elements.dmComposerInput, msg + random);
        },

        clickSend() {
            return this.click(this.elements.dmComposerSendBtn);
        },

        isLatestMessageEqualsTo(msg) {
            latestMsgEl = `//android.widget.Button[contains(@text, '${msg}')]`;
            return this.useXpath().waitForElementVisible(latestMsgEl, `Message '${msg}' was correctly sent`);
        }
    }]
};