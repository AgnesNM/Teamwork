const request = require("request");
const base_url = "http://localhost:3000/";


describe("employee can edit their articles", () => {
    describe("PUT /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('changes saved');
                done();
            });
        });
        it("send message body with article title", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(gifTitle);
                done();
            });
        });
        it("send message body with article id", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(articleId);            });

        });
        it("send message body with article author", () => {
                request.post(base_url, (error, request,body) => {
                    expect(body).toContain(articleAuthor);
                });        
         });
        it("send message body with author id", () => {
                        request.post(base_url, (error, request,body) => {
                            expect(body).toContain(authorId);
                        });        
                 });
        });
});
