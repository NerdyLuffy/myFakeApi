const chai = require('chai');
const chaiHttp = require('chai-http');
const cars = require('../src/app.js');

chai.should();
chai.use(chaiHttp);

describe('Car Unit Test', () => {

    
    it('It should return all the cars data',(done)=>{
        chai.request(cars)
        .get('/api/cars')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('cars').with.lengthOf(1000);
            done();
        });
    });

    it('It should return a single car when a valid ID is provided',(done)=>{
        chai.request(cars)
        .get('/api/cars/1')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('Car').to.have.ownProperty('id',1);
            done();
        })
    });

    it('It should return 400 when Invalid ID is provided',(done)=>{
        chai.request(cars)
        .get('/api/cars/10001')
        .end((err,res)=>{
            res.should.have.status(400);
            res.body.should.have.property('errorMessage');
            done();
        })
    });

    it('It should return a single car when a valid name is provided',(done)=>{
        chai.request(cars)
        .get('/api/cars/name/Mitsubishi')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('Cars').to.be.a('array');
            done();
        })
    });

    it('It should return 400 when Invalid name is provided',(done)=>{
        chai.request(cars)
        .get('/api/cars/name/Mitsubishi1')
        .end((err,res)=>{
            res.should.have.status(400);
            res.body.should.have.property('errorMessage');
            done();
        })
    });
    
});