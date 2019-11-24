const request = require('request');
const base_url = "http://localhost:3000/";

describe("employee sign in", () => {
    describe("GET/",()=> {
            it("return status code 200", () =>{
                request.get(base_url,(error,response,body)=>{     
                });   
            });        
        describe("admin sign in", () => {        
            it("return success message", () =>{
                request.get(base_url,(error,request,body)=>{                
                    expect(body).toBe("employee logged in successfully!");
                    done();
                });            
            });
        });
    });
});