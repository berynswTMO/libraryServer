const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const { expect } = chai;
chai.use(chaiHttp);

describe("Base routes", () => {
  it("provides a response to the health endpoint", (done) => {
    chai
      .request(app)
      .get("/health")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

var book1 = {
  "id": 2,
  "author": "Philip K. Dick",
  "title": "Do Androids Dream of Electric Sheep?",
  "yearPublished": 1968
}

var book2 = {
  "author": "Douglas Adams",
  "title": "The Hitchhiker's Guide to the Galaxy",
  "yearPublished": 1979
}

var book3 = {
  "author": "John Doe",
  "title": "Z yep",
  "yearPublished": 1969
}

describe("Additional Routes", () => {
  it("add book1 to the library", (done) => {
    chai
      .request(app)
      .post('/api/books')
      .type('form')
      .send(book2)
      .end((err, res) => {
        expect(res).to.have.status(201);
        console.log(res.body);
        done();
      });
  });
  it("add book2 to the library", (done) => {
    chai
      .request(app)
      .post('/api/books')
      .type('form')
      .send(book1)
      .end((err, res) => {
        expect(res).to.have.status(201);
        console.log(res.body);
        done();
      });
  });
  it("add book3 to the library", (done) => {
    chai
      .request(app)
      .post('/api/books')
      .type('form')
      .send(book3)
      .end((err, res) => {
        expect(res).to.have.status(201);
        console.log(res.body);
        done();
      });
  });
  it("retrieve library alphabetized by title", (done) => {
    chai
      .request(app)
      .get('/api/books')
      .end((err, res) => {
        expect(res).to.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it("empty library", (done) => {
    chai
      .request(app)
      .delete('/api/books')
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });
});
