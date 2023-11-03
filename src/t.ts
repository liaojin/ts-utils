import supertest from "supertest";



class jtest {
    app:supertest.SuperTest<supertest.Test>
    constructor(a:any){
        this.app = supertest(a)
    }

    get(path:string) {
        return this.app.get(path)
    }
}


export function makeTest(app:any):jtest {
   return new jtest(app)
}