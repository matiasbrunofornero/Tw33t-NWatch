module.exports = {
    elements: {
        newMessageBtn: {
            selector: `//android.widget.Button[contains(@text, 'Compose a Direct Message')]`,
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
        clickStartConversation() {
            return this.click(this.elements.newMessageBtn);
        },

        searchUserToMessage(usr) {
            this.setValue(this.elements.searchPeopleInput, usr);
            this.useXpath().click(`//android.widget.CheckBox[contains(@text, ${usr})]`);
            return this.click(this.elements.nextBtn)
        },

        setMessage(msg, random) {
            return this.setValue(this.elements.dmComposerInput, msg + random);
        },

        clickSend() {
            return this.click(this.elements.dmComposerSendBtn);
        }
    }]
};