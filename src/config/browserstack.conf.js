const baseConfig = require('./web.conf');

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

config.test_settings.firefox = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: 'XP',
        browserName: 'Firefox',
        browser_version: '47.0',
        ['browserstack.local']: false
    }
}

for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;