const baseConfig = require('./android.bs.conf');

const config = {
    ...baseConfig,
    webdriver: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 80
    }
};

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;

config.test_settings.android = {
    desiredCapabilities: {
        real_mobile: true,
        os_version: '7.0',
        browserName: 'Android',
        device: "Samsung Galaxy S8",
        ['browserstack.local']: false
    }
}

for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;