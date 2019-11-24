const request = require("request");
const base_url = "http://localhost:3000/";


describe("employee can view articles and gifs sorted by date created", () => {
    describe("GET /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("send message body with article", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(article);
                done();
            });
        });
        it("send message body with gif", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(gif);            });

        });
        it("send message body with article created date", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(articleCreatedDte);
             });        
         });
        it("send message body with gif created date", () => {
            request.post(base_url, (error, request,body) => {
               expect(body).toContain(gifCreatedDate);
            });        
        });
    });
});