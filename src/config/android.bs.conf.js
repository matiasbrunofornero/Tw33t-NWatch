module.exports = {
    src_folders: ["src/tests/android"],
    page_objects_path: ["src/pages/mobile/android"],

    webdriver: {
        start_process: true,
    },

    test_settings: {
        default: {
            silent: true,
            use_xpath: true,
            desiredCapabilities: {
                deviceReadyTimeout: 20,
                autoGrantPermissions: true,
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}