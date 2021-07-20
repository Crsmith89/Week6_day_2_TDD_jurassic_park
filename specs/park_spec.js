const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  
  beforeEach(function () {
    park = new Park('Jurassic park', 50)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 100)
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 75)
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 40)


  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurs[0].species;
    assert.deepStrictEqual(actual, "Triceratops")
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
