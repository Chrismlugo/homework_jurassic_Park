var assert = require('assert');
var Park = require('../Park.js');
var Dino = require('../Dino.js')

describe('Park', function(){

beforeEach(function(){
  park = new Park();
});

it('enclosure is initially empty', function(){
  assert.strictEqual(park.enclosure.length, 0);
});

});
