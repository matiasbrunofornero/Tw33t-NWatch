module.exports = {
    // elements: {
    //     usrInput: '//android.view.View[@text="Phone, email, or username"]//..//*[contains(@class, "EditText")]',
    //     pwdInput: '//android.view.View[@text="Password"]//..//*[contains(@class, "EditText")]',
    //     loginBtn: '//android.widget.Button[@text="Log in"]'
    // },

    commands: [{
        setUsername(usr) {
            if (!usr) usr = 'matiasbrunousers@gmail.com';
            return this.setValue('//android.view.View[@text="Phone, email, or username"]//..//*[contains(@class, "EditText")]', usr);
        },

        setPassword(pwd) {
            if (!pwd) pwd = 'p455word';
            return this.setValue('//android.view.View[@text="Password"]//..//*[contains(@class, "EditText")]', pwd);
        },

        clickLogin(nightwatch) {
            this.click('//android.widget.Button[@text="Log in"]');
            return nightwatch.page.androidHomePage();
        },

        loginAs(usr, pwd, nightwatch) {
            this.setUsername(usr).setPassword(pwd);
            const homePage = this.clickLogin(nightwatch);
            return homePage.clickHome();
        }
    }]
};