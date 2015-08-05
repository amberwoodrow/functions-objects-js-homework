function Route(miles, destination, location) {
  this.miles = miles;
  this.destination = destination;
  this.location = location;
};

var route1 = new Route(200, "Boulder", "Fancy Land, CO");
var route2 = new Route(160, "Corn fields", "Everywhere, Idaho");

function Car(milesPerGallon, gallonsInTank) {
  this.milesPerGallon = milesPerGallon;
  this.gallonsInTank = gallonsInTank;
}

var car1 = new Car(25, 3);
var car2 = new Car(32, 5);

function gasEnoughForTrip(carSpecs, routeSpecs) {
  var milesPerTank = carSpecs.milesPerGallon * carSpecs.gallonsInTank;
  if (milesPerTank >= routeSpecs.miles) {
    return true;
  }
  else {
    return false;
  }
}

console.log(gasEnoughForTrip(car1, route1));
console.log(gasEnoughForTrip(car2, route2));