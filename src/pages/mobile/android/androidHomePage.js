module.exports = {
    elements: {
        directMessagesBtn: '//android.view.View[@text="Direct Messages"]'
    },

    commands: [{
        clickHome() {
            console.log('you has clicked Home');
            return this;
        },

        clickMessages() {
            console.log('you has clicked Messages');
            return this.click(this.elements.messagesTabBtn);
        }
    }]
};