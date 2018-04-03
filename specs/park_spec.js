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
  park.removeDinoType("Triceratops");
  assert.strictEqual(park.enclosure.length, 1);
  assert.deepStrictEqual(park.enclosure, [dinosaur4]);
});

it('can get dinosaurs of high offspring count', function(){
  assert.deepStrictEqual(park.getDinosWithHighOffspringCount(), [dinosaur2,dinosaur3]);
});

it('can calculate number of dinos after one year based on one dino', function(){
    assert.strictEqual(park.calculatePopulationGrowth(dinosaur2, 1), 4);
});

it('can calculate number of dinos after two years based on one dino', function(){
  assert.strictEqual(park.calculatePopulationGrowth(dinosaur2, 2), 7);
});

it('can calculate estimated population of dinos after one year', function(){
  assert.strictEqual(park.calculateTotalPopulationGrowth(1), 10);
})
it('can calculate estimated population of dinos after two years', function(){
  assert.strictEqual(park.calculateTotalPopulationGrowth(2), 17);
})

});
