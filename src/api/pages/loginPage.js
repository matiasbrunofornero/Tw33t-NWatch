const requestSync = require('sync-request');
const BaseURLApi = 'https://postman-twitter.herokuapp.com/';

module.exports = {
    createUser(name, username, password) {
        const user = {
            "name": name,
            "username": username,
            "password": password
        }

        const bodyParams = JSON.stringify(user);

        return requestSync("POST", BaseURLApi + 'api/auth/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyParams
        });
    },

    loginAs(username, password) {
        const user = {
            "username": username,
            "password": password
        }

        const bodyParams = JSON.stringify(user);

        return requestSync("POST", BaseURLApi + 'api/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyParams
        });
    },

    getAuthStatus(response) {
        return response.auth;
    },

    getToken(response) {
        return response.token;
    },

    isTokenCorrect(response) {
        return expect(response.token).toMatch(new RegExp("\.{171}"));
    },

    logout(token) {
        return requestSync("GET", BaseURLApi + 'api/auth/logout', {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
    }
}