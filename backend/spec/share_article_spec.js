const request = require("request");
const base_url = "http://localhost:3000/";

describe("employee can share articles", () => {
    describe("GET /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
            });
        });
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('article shared successfully');
                done();
            });
        });
        
        it("send message body with article title", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(username);
                expect(body).toContain(gifTitle);
                done();
            });
        });      
    }); 
});