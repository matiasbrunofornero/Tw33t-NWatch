const requestSync = require('sync-request');
const BaseURLApi = 'https://postman-twitter.herokuapp.com/';

module.exports = {
    getProfileInfo(token) {
        return requestSync("GET", BaseURLApi + 'api/auth/me', {
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "postman-twitter.herokuapp.com",
                "X-Amz-Date": "20181031T171842Z"
            },
        })
    },

    getProfileName(response) {
        return response.name;
    },

    getProfileUsername(response) {
        return response.username;
    }
}