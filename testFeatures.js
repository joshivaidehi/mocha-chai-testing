var assert = require('assert');

describe('Mathematical operations - test suite' , function(){

    var a = 10;
    var b = 10;

    it.skip('Addition of two numbers', function(){

        var c = a+b;

        assert.equal(c,20);

    })
    it('Subtraction of two numbers', function(){

        var c = a-b;

        assert.equal(c,0);

    })
    it('Multiplication of two numbers', function(){
 
        var c = a*b;

        assert.equal(c,100);

    })
    it('Division of two numbers', function(){
 
        var c = a/b;

        assert.equal(c,1);


    })

})