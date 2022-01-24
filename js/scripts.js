function PlacesIveBeen() {
  this.destinations = {};
  this.currentId = 0;
}

PlacesIveBeen.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
}
  
PlacesIveBeen.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
};


function Destination(location, landmarks, timeOfYear, notes){
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};

let lasVegas = new Destination("Las Vegas, NV", "Omega-Mart", "Christmas", "This place ruled");
let seattle = new Destination("Seattle, WA", "Space Needle", "Summer 2022", "Seattle is awesome");
let amsterdam = new Destination("Amsterdam, NE", "RjiksMuseum", "March 2019", "Accidentally wandered in the red light district, people were nice");
let paris = new Destination("Paris, FR", "Louvre Museum", "March 16th-20th", "People respected my attempts at pitiful french");

let summer2021 = new PlacesIveBeen();
let march2019 = new PlacesIveBeen();
summer2021.addDestination(lasVegas);
summer2021.addDestination(seattle);
march2019.addDestination(amsterdam);
march2019.addDestination(paris);
console.log(summer2021);
console.log(march2019);

