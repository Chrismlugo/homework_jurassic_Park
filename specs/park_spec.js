var assert = require('assert');
var Park = require('../Park.js');
var Dino = require('../Dino.js')

describe(' Empty Park', function(){

beforeEach(function(){
  park = new Park();
  dinosaur1 = new Dino("Triceratops", 3);
});

it('enclosure is initially empty', function(){
  assert.strictEqual(park.enclosure.length, 0);
});

it('can add dinosaur to enclosure', function(){
  park.addDino(dinosaur1);
  assert.strictEqual(park.enclosure.length, 1);
  assert.deepStrictEqual(park.enclosure, [dinosaur1]);
});
});

describe('Park with dinos', function(){
  beforeEach(function(){
    park = new Park();
    dinosaur2 = new Dino("Triceratops", 3);
    dinosaur3 = new Dino("Triceratops", 3);
    dinosaur4 = new Dino("T-Rex", 1)
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
  });

it('can remove dino of type', function(){
  park.removeDinoType("T-Rex");
  assert.strictEqual(park.enclosure.length, 2);
  assert.deepStrictEqual(park.enclosure, [dinosaur2, dinosaur3]);
});

});
