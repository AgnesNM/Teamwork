const request = require("request");
const base_url = "http://localhost:3000/";


describe("employee can delete their articles", () => {
    describe("DELETE /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {                
                expect(body).toBe('article deleted');
                done();
            });
        });
    });
});