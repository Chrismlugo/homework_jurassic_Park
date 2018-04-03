var assert = require('assert');
var Dino = require('../Dino.js');


describe('Dinosaur', function(){

    beforeEach(function(){
      dino1 = new Dino("Raptor", 2);
    });

    it('dino has a type', function(){
      assert.strictEqual(dino1.type, "Raptor");
    });

    it('has a number of offspring', function(){
      assert.strictEqual(dino1.offspring, 2);
    });

    
});
