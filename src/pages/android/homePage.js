module.exports = {
    elements: {
        directMessagesBtn: {
            selector: '//android.view.View[@text="Direct Messages"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        clickHome() {
            return this;
        },

        clickMessages(nightwatch) {
            this.click(this.elements.directMessagesBtn);
            return nightwatch.page.messagesPage();
        }
    }]
};