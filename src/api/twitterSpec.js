var SyncRequest = require('sync-request');
var BaseURLApi = 'https://postman-twitter.herokuapp.com/';

describe("Twitter-like API for Postman internship", function () {

    it("Basic Twitter Heroku flow", function () {

        sUser = {
            "name": "Sayantan",
            "username": "sayantan",
            "password": "secretpwd"
        };

        let oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/register', {
            json: sUser
        });

        let oResponseCreate = JSON.parse(oRequestCreate.body);
        let sAuth = oResponseCreate.auth;
        let sToken = oResponseCreate.token;
        const sUserId = oResponseCreate.user_id;

        expect(sAuth).toBe(true);
        expect(sToken).toMatch(new RegExp("\.{171}"));

        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/login', {
            json: {
                "username": sUser.username,
                "password": sUser.password
            }
        });

        oResponseCreate = JSON.parse(oRequestCreate.body);
        sToken = oResponseCreate.token;

        expect(sAuth).toBe(true);
        expect(sToken).toMatch(new RegExp("\.{171}"));

        oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/auth/me', {
            headers: {
                "Authorization": "Bearer " + sToken,
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "postman-twitter.herokuapp.com",
                "X-Amz-Date": "20181031T171842Z"
            },
        })

        oResponseCreate = JSON.parse(oRequestCreate.body);
        const sName = oResponseCreate.name;
        const sUsername = oResponseCreate.username;

        expect(sName).toEqual(sUser.name);
        expect(sUsername).toEqual(sUser.username);

        oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/auth/logout', {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        })

        oResponseCreate = JSON.parse(oRequestCreate.body);
        sAuth = oResponseCreate.auth;

        expect(sAuth).toBe(false);
        expect(oResponseCreate.token).toBeNull();

        aUser = {
            "name": "Argha",
            "username": "argha",
            "password": "secretpwd"
        };

        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/auth/register', {
            json: aUser
        });

        oResponseCreate = JSON.parse(oRequestCreate.body);
        const aAuth = oResponseCreate.auth;
        const aToken = oResponseCreate.token;
        const aUserId = oResponseCreate.user_id;

        expect(aAuth).toBe(true);
        expect(aToken).toMatch(new RegExp("\.{171}"));

        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/user/' + sUserId + '/follow', {
            headers: {
                "Authorization": "Bearer " + aToken
            }
        });

        oResponseCreate = JSON.parse(oRequestCreate.body);

        expect(oResponseCreate.from).toEqual(aUserId);
        expect(oResponseCreate.to).toEqual(sUserId);

        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/user/' + sUserId + '/unfollow', {
            headers: {
                "Authorization": "Bearer " + aToken
            }
        });

        const tweet = "Hello from the server side!";
        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/tweet/new', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sToken
            },
            body: JSON.stringify({ "text": tweet }),
        });

        oResponseCreate = JSON.parse(oRequestCreate.body);
        const tweetId = oResponseCreate._id;
        expect(tweetId).toMatch(new RegExp("\.{24}"));

        oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        // STATUS CODE EQUALS TO 200 (SUCCESSFULL!!)
        // REPEAT IN ALL THE REQUESTS
        expect(oRequestCreate.statusCode).toEqual(200);

        oResponseCreate = JSON.parse(oRequestCreate.body);
        expect(oResponseCreate.nLikes).toEqual(0);
        expect(oResponseCreate.isReply).toBe(false);
        expect(oResponseCreate.text).toEqual(tweet);

        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/tweet/' + tweetId + '/like', {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        expect(oRequestCreate.statusCode).toEqual(200);
        oResponseCreate = JSON.parse(oRequestCreate.body);
        expect(oResponseCreate.tweetId).toEqual(tweetId);

        oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        expect(oRequestCreate.statusCode).toEqual(200);
        oResponseCreate = JSON.parse(oRequestCreate.body);
        expect(oResponseCreate.nLikes).toEqual(1);

        oRequestCreate = SyncRequest("POST", BaseURLApi + 'api/tweet/' + tweetId + '/unlike', {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        expect(oRequestCreate.statusCode).toEqual(200);

        oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        expect(oRequestCreate.statusCode).toEqual(200);
        oResponseCreate = JSON.parse(oRequestCreate.body);
        expect(oResponseCreate.nLikes).toEqual(0);
        expect(oResponseCreate.isReply).toBe(false);

        const reply = "Hello, this is a reply!",
        oRequestCreatee = SyncRequest("POST", BaseURLApi + 'api/tweet/' + tweetId + '/reply', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sToken
            },
            body: JSON.stringify({ "text": reply }),
        });

        expect(oRequestCreatee.statusCode).toEqual(200);
        expect(oResponseCreate.tweetId).toEqual(tweetId);

        oRequestCreate = SyncRequest("GET", BaseURLApi + 'api/tweet/' + tweetId, {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        expect(oRequestCreate.statusCode).toEqual(200);
        oResponseCreate = JSON.parse(oRequestCreate.body);
        expect(oResponseCreate.nLikes).toEqual(0);
        expect(oResponseCreate.replies.length).toBeGreaterThan(0);

        oRequestCreate = SyncRequest("DELETE", BaseURLApi + 'api/tweet/' + tweetId, {
            headers: {
                "Authorization": "Bearer " + sToken
            }
        });

        expect(oRequestCreate.statusCode).toEqual(200);
        oResponseCreate = JSON.parse(oRequestCreate.body);
        expect(oResponseCreate.message).toEqual('Successfully deleted!');
    })
})