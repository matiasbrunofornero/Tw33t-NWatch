module.exports = {
    src_folders: ["src/tests/ios"],
    // page_objects_path: ["src/pages/mobile/android"],

    selenium: {
        start_process: true,
        server_path: '/Users/matias/Desktop/Tw33t-NWatch/src/data/selenium-server-standalone.jar',
        host: "127.0.0.1",
        // port: 4444,
        cli_args: {
            "webdriver.chrome.driver": '/Users/matias/Desktop/Tw33t-NWatch/src/data/chromedriver',
        }
    },

    test_settings: {
        default: {
            // launch_url: "http://localhost:4723/wd/hub",
            selenium_port: 4723,
            selenium_host: "localhost",
            silent: true,
            desiredCapabilities: {
                platformName: "iOS",
                deviceName: "iPhone XR",
                platformVersion: "13.1",
                app: "/Users/matias/Desktop/Tw33t-NWatch/src/data/BonusApp.app",
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: [
                        '--disable-gpu --no-sandbox --headless --window-size=1920,1080 --verbose'
                    ]
                }
            }
        }
    }
}