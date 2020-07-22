var SyncRequest = require('sync-request');
var BaseURLApi = 'https://postman-twitter.herokuapp.com/';

const commonCmds = require('../api/pages/commonCmds');
const loginPage = require('../api/pages/loginPage');
const profilePage = require('../api/pages/profilePage');

describe("Twitter-like API for Postman internship", function () {

    it("Register, Login and Logout functionalities", function () {

        const name = "Matias Automated BBFF";
        const username = "matautomated11";
        const password = "p455word";

        let request = loginPage.createUser(name, username, password);
        commonCmds.default.requestCodeIsEqualsTo(200, request);

        let response = JSON.parse(request.body);
        const tokenRegex = new RegExp("\.{171}")
        expect(loginPage.getAuthStatus(response)).toBe(true);
        expect(loginPage.getToken(response)).toMatch(tokenRegex);

        request = loginPage.loginAs(username, password);
        commonCmds.default.requestCodeIsEqualsTo(200, request);

        response = JSON.parse(request.body);
        expect(loginPage.getAuthStatus(response)).toBe(true);
        expect(loginPage.getToken(response)).toMatch(tokenRegex);

        const token = loginPage.getToken(response);
        request = profilePage.getProfileInfo(token);
        commonCmds.default.requestCodeIsEqualsTo(200, request);

        response = JSON.parse(request.body);
        expect(profilePage.getProfileName(response)).toEqual(name);
        expect(profilePage.getProfileUsername(response)).toEqual(username);

        request = loginPage.logout(token);
        commonCmds.default.requestCodeIsEqualsTo(200, request);

        response = JSON.parse(request.body);
        expect(loginPage.getAuthStatus(response)).toBe(false);
        expect(loginPage.getToken(response)).toBeNull();
    })

    it("Follow and Unfollow functionalities", function () {
        console.log("\n\nNot so fast! This is a work in progress!")
    })

    it("Tweet actions functionalities", function () {
        console.log("\n\nNot so fast! This is a work in progress!")
    })

    //     aUser = {
    //         "name": "Argha",
    //         "username": "argha",
    //         "password": "secretpwd"
    //     };

    //     oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/register', {
    //         json: aUser
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     const aAuth = oResponseCreate.auth;
    //     const aToken = oResponseCreate.token;
    //     const aUserId = oResponseCreate.user_id;

    //     expect(aAuth).toBe(true);
    //     expect(aToken).toMatch(new RegExp("\.{171}"));

    //     oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/user/' + sUserId + '/follow', {
    //         headers: {
    //             "Authorization": "Bearer " + aToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.from).toEqual(aUserId);
    //     expect(oResponseCreate.to).toEqual(sUserId);

    //     oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/user/' + sUserId + '/unfollow', {
    //         headers: {
    //             "Authorization": "Bearer " + aToken
    //         }
    //     });

    //     const tweet = "Hello from the server side!";
    //     oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/tweet/new', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': "Bearer " + sToken
    //         },
    //         body: JSON.stringify({ "text": tweet }),
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     const tweetId = oResponseCreate._id;
    //     expect(tweetId).toMatch(new RegExp("\.{24}"));

    //     oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.nLikes).toEqual(0);
    //     expect(oResponseCreate.isReply).toBe(false);
    //     expect(oResponseCreate.text).toEqual(tweet);

    //     oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/tweet/' + tweetId + '/like', {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.tweetId).toEqual(tweetId);

    //     oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.nLikes).toEqual(1);

    //     oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/tweet/' + tweetId + '/unlike', {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);

    //     oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.nLikes).toEqual(0);
    //     expect(oResponseCreate.isReply).toBe(false);

    //     const reply = "Hello, this is a reply!",
    //         oRequestCreatee = SyncRequest("POST", BaseURLApi + 'api/tweet/' + tweetId + '/reply', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': "Bearer " + sToken
    //             },
    //             body: JSON.stringify({ "text": reply }),
    //         });

    //     expect(oRequestCreatee.statusCode).toEqual(200);

    //     oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.nLikes).toEqual(0);
    //     expect(oResponseCreate.replies.length).toBeGreaterThan(0);

    //     oRequestCreate = SyncRequest("DELETE", BaseURLApi + 'api/tweet/' + tweetId, {
    //         headers: {
    //             "Authorization": "Bearer " + sToken
    //         }
    //     });

    //     expect(oRequestCreate.statusCode).toEqual(200);
    //     oResponseCreate = JSON.parse(oRequestCreate.body);
    //     expect(oResponseCreate.message).toEqual('Successfully deleted!');
    // })
})