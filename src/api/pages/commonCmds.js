exports.default = {
    requestCodeIsEqualsTo(code, request) {
        return expect(request.statusCode).toEqual(code);
    }
}