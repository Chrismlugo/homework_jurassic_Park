var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDino = function (dino) {
  this.enclosure.push(dino);
};

Park.prototype.removeDinoType = function (type) {
  // for(let dinosaur of this.enclosure){
  //   if(dinosaur.type === type){
  //     var index = this.enclosure.indexOf(dinosaur);
  //     this.enclosure.splice(index);
  //   }
  // }
  const result = this.enclosure.filter(dino => dino.type !== type);
  this.enclosure = result;
};

Park.prototype.getDinosWithHighOffspringCount = function () {
  const result = this.enclosure.filter(dino => dino.offspring > 2);
  return result;
};

Park.prototype.calculatePopulationGrowth = function (dino, year) {
    var result = 0
        result += dino.offspring * year + 1;

        return result;
};

module.exports = Park;
