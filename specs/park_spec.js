var assert = require('assert');
var Park = require('../Park.js');
var Dino = require('../Dino.js')

describe('Park', function(){

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
