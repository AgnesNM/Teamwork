const request = require("request");
const base_url = "http://localhost:3000/";


describe("employee can comment on articles", () => {
    describe("POST /", () => {
            it("return a response status code of 200", () => {
                request.get(base_url,(error,response,body) =>{
                    expect(response.statusCode).toBe(200);
                });
                done();
            });
     
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {                
                expect(body).toBe('comment updated!');
                done();
            });
        });

        it("send message body with comment", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(comment);
            });
        });
    });
});