
var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect

var strictEqual = require('../strictequal')


describe('strictEqual',() => {
    it ('return true when types are the same or different', () => {

        var result = strictEqual (1,1)

        expect(result).to.equal(true)
    })    

    it ('return false when types are not the same or different', () => {

        var result = strictEqual (2,2')

        expect(result).to.equal(false)
    })  
})    
       
