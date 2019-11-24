const request = require("request");
const base_url = "http://localhost:3000/";


describe("admin can create employee account", () => {
    describe("POST /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('employee account created successfully');
                done();
            });
        });
        it("send message body with username", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(username);
                done();
            });
        });
        it("send message body with password", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(password);
            });
        });
    });
}); 