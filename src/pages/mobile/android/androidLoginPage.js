module.exports = {
    elements: {
        usrInput: {
            selector: '//android.view.View[@text="Phone, email, or username"]//..//*[contains(@class, "EditText")]',
            locateStrategy: 'xpath'
        },
        pwdInput: {
            selector: '//android.view.View[@text="Password"]//..//*[contains(@class, "EditText")]',
            locateStrategy: 'xpath'
        },
        loginBtn: {
            selector: '//android.widget.Button[@text="Log in"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        setUsername(usr) {
            if (!usr) usr = 'matiasbrunousers@gmail.com';
            return this.setValue(this.elements.usrInput, usr);
        },

        setPassword(pwd) {
            if (!pwd) pwd = 'p455word';
            return this.setValue(this.elements.pwdInput, pwd);
        },

        clickLogin(nightwatch) {
            this.click(this.elements.loginBtn);
            return nightwatch.page.androidHomePage();
        },

        loginAs(usr, pwd, nightwatch) {
            this.setUsername(usr).setPassword(pwd);
            const homePage = this.clickLogin(nightwatch);
            return homePage.clickHome();
        }
    }]
};