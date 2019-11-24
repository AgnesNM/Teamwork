const request = require("request");
const base_url = "http://localhost:3000/";


describe("admin can post gif", () => {
    describe("POST /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('gif created successfully');
                done();
            });
        });        
        it("send message body with gif title", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(gifTitle);
            });
        });
        it("send message body with gif image", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(image);
            });
        });
    });
});