const request = require('request');
const base_url = "http://localhost:3000/";

describe("employee can view all articles in a category", () => {
    describe("GET /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("send message body with article", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(articleTitle);                
                done();
            });
        });

        it("send message body with article category", () => {
            request.post(base_url, (error, request,body) => {                
                expect(body).toContain(articleCategory);
            });
        });
    });
});   
