module.exports = {
    src_folders: ["src/tests/ios"],
    // page_objects_path: ["src/pages/ios"],

    selenium: {
        start_process: true,
        server_path: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar",
        host: "127.0.0.1"
    },

    test_settings: {
        default: {
            selenium_start_process: false,
            selenium_port: 4723,
            selenium_host: "localhost",
            silent: true,
            desiredCapabilities: {
                browserName: "Safari",
                platformName: "iOS",
                deviceName: "iPhone XR",
                platformVersion: "13.1",
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}