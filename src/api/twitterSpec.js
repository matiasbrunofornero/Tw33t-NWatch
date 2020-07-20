var SyncRequest = require('sync-request');
var userToOperateWith = null;
var BaseURLApi = 'https://postman-twitter.herokuapp.com/';

describe("Twitter-like API for Postman internship", function () {

    it("Basic Twitter Heroku flow", function () {

        userToOperateWith = {
            "name": "Sayantan",
            "username": "sayantan",
            "password": "secretpwd"
        };

        var oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/register', {
            json: userToOperateWith
        });

        var oResponseCreate = JSON.parse(oRequestCreate.body);
        const userId = oResponseCreate.user_id;

        userToOperateWith = {
            "username": "sayantan",
            "password": "secretpwd"
        };

        var oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/login', {
            json: userToOperateWith
        });

        var oResponseCreate = JSON.parse(oRequestCreate.body);
        var token = oResponseCreate.token

        var oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/auth/me', {
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "postman-twitter.herokuapp.com",
                "X-Amz-Date": "20181031T171842Z"
            },
        })

        var oResponseCreate = JSON.parse(oRequestCreate.body);

        var oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/auth/logout', {
            headers: {
                "Authorization": "Bearer " + token
            },
        })

        var oResponseCreate = JSON.parse(oRequestCreate.body);

        userToOperateWith = {
            "name": "Argha",
            "username": "argha",
            "password": "secretpwd"
        };

        var oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/register', {
            json: userToOperateWith
        });

        var oResponseCreate = JSON.parse(oRequestCreate.body);
        // bToken = oResponseCreate.token

        var oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/user/' + userId + '/follow', {
            "Authorization": "Bearer " + oResponseCreate.token,
        });

        var oResponseCreate = JSON.parse(oRequestCreate.body);
        console.log(oResponseCreate)

    });
});
