const request = require("request");
const base_url = "http://localhost:3000/";


describe("employee can create articles", () => {
    describe("POST /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("return a success message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.body).toBe("article created successfully!");
                done();
            });
        });

        it("send message body with article title", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(articleTitle);
                done();
            });
        });

        it("send message body with article author", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(articleAuthor);
            });
        });

    });
});