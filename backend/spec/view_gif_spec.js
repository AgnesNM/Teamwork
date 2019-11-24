const request = require('request');
const base_url = "http://localhost:3000/";

describe("employee can view a specific gif", () => {
    describe("GET /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
             it("send message body with gif title", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(gifTitle);
                done();
            });
        });
    });
});