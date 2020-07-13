module.exports = {
    src_folders: ["src/tests/android"],
    page_objects_path: ["src/pages/mobile/android"],

    webdriver: {
        start_process: false,
    },

    test_settings: {
        default: {
            selenium_port: 4723,
            selenium_host: "localhost",
            silent: true,
            use_xpath: true,
            desiredCapabilities: {
                browserName: "",
                platformName: "Android",
                appiumVersion: "1.17.1",
                chromedriverExecutable: "./data/chromedriver",
                app: "src/data/twitter_lite.apk",
                appPackage: "com.twitter.android.lite",
                appActivity: "com.twitter.android.lite.TwitterLiteActivity",
                platformVersion: "9",
                deviceName: "Pixel_XL",
                automationName: "UiAutomator2",
                avd: "Pixel_XL",
                deviceReadyTimeout: 20,
                autoGrantPermissions: true,
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}